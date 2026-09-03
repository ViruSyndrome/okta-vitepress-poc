const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../docs');
const TARGET_LANG = 'fr';
const TARGET_DIR = path.join(__dirname, ../docs/$TARGET_LANG);

// A mock localization pipeline demonstrating how an EM would automate MDX translation
console.log([L10n Pipeline] Initiating sync for locale: $TARGET_LANG...);

function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) return true;
    ensureDirectoryExists(dirname);
    fs.mkdirSync(dirname);
}

function syncTranslations(subDir) {
    const sourcePath = path.join(SOURCE_DIR, subDir);
    const targetPath = path.join(TARGET_DIR, subDir);

    if (!fs.existsSync(sourcePath)) return;

    const files = fs.readdirSync(sourcePath);
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const originalContent = fs.readFileSync(path.join(sourcePath, file), 'utf8');
            
            // Mock Translation API Call: 
            // In production, this would parse the Markdown AST and send text nodes to Crowdin/Smartling.
            let translatedContent = originalContent.replace(/Acme Corp/g, 'Acme Corp (Français)');
            
            // Write localized file
            const destFile = path.join(targetPath, file);
            ensureDirectoryExists(destFile);
            fs.writeFileSync(destFile, translatedContent, 'utf8');
            
            console.log([L10n Pipeline] Generated localized file: /$TARGET_LANG/$subDir/$file);
        }
    });
}

// Sync specific documentation directories
syncTranslations('guides');
syncTranslations('help');

console.log([L10n Pipeline] Sync complete. Translated files ready for VitePress build.);
