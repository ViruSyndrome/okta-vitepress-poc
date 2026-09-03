const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../docs');
const LOCALES = ['fr', 'de'];

console.log(`[L10n Pipeline] Initiating sync for locales: ${LOCALES.join(', ')}...`);

function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) return true;
    ensureDirectoryExists(dirname);
    fs.mkdirSync(dirname);
}

function syncTranslations(subDir, lang) {
    const sourcePath = path.join(SOURCE_DIR, subDir);
    const targetPath = path.join(SOURCE_DIR, lang, subDir);

    if (!fs.existsSync(sourcePath)) return;

    const files = fs.readdirSync(sourcePath);
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const originalContent = fs.readFileSync(path.join(sourcePath, file), 'utf8');
            
            // Mock Translation API Call: 
            let translatedContent = originalContent;
            if (lang === 'fr') {
                translatedContent = translatedContent.replace(/Acme Corp/g, 'Acme Corp (Français)');
            } else if (lang === 'de') {
                translatedContent = translatedContent.replace(/Acme Corp/g, 'Acme Corp (Deutsch)');
            }
            
            // Write localized file
            const destFile = path.join(targetPath, file);
            ensureDirectoryExists(destFile);
            fs.writeFileSync(destFile, translatedContent, 'utf8');
            
            console.log(`[L10n Pipeline] Generated localized file: /${lang}/${subDir}/${file}`);
        }
    });
}

// Sync specific documentation directories for all locales
LOCALES.forEach(lang => {
    syncTranslations('guides', lang);
    syncTranslations('help', lang);
});

console.log(`[L10n Pipeline] Sync complete. Translated files ready for VitePress build.`);
