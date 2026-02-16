import fs from 'fs';
import { minify } from 'terser';
import path from 'path';

const vendorPath = path.resolve('dist/assets/js/vendor.js');

async function minifyVendor() {
    if (!fs.existsSync(vendorPath)) {
        console.error('Vendor file not found!');
        return;
    }

    const code = fs.readFileSync(vendorPath, 'utf8');
    const minified = await minify(code, {
        compress: true,
        mangle: true
    });

    fs.writeFileSync(vendorPath, minified.code);
    console.log('✅ vendor.js minified successfully!');
}

minifyVendor();