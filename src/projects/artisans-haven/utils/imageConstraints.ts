/**
 * imageConstraints.ts - Product Image Sizing Utility
 * 
 * Ensures product detail images don't overflow their containers
 * by applying responsive width constraints based on viewport size.
 * 
 * Used by ProductDetail component to prevent layout issues
 * with large product images on various screen sizes.
 * 
 * Algorithm:
 * 1. Calculates available width: viewport - padding - margins
 * 2. Compares image natural width to available space
 * 3. Applies max-width constraint if image is too large
 * 4. Maintains aspect ratio
 * 
 * Called after component mount and image load to ensure
 * images are properly sized before display.
 */

// src/projects/artisans-haven/utils/imageConstraints.ts

export function constrainProductImages() {
    const images = document.querySelectorAll('.detail-image');

    images.forEach((img) => {
        const imageElement = img as HTMLImageElement;

        // Wait for image to load
        if (imageElement.complete) {
            applyConstraints(imageElement);
        } else {
            imageElement.addEventListener('load', () => applyConstraints(imageElement));
        }
    });
}

function applyConstraints(img: HTMLImageElement) {
    // Calculate allowed max width based on viewport
    // Formula: 100vw - 2rem - 64px - 32px - 16px
    const viewportWidth = window.innerWidth;
    const remInPixels = 16; // 1rem = 16px (default)
    const allowedWidth = viewportWidth - (2 * remInPixels) - 64 - 32 - 16;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Check if image exceeds allowed width
    if (naturalWidth > allowedWidth) {
        // Force image to fit within constraints
        img.style.maxWidth = `${allowedWidth}px`;
        img.style.width = 'auto';
        img.style.height = 'auto';
        img.style.objectFit = 'contain';
    }

    // Also check max height (450px as defined in CSS)
    const maxHeight = 450;
    const currentHeight = img.offsetHeight;

    if (currentHeight > maxHeight) {
        img.style.maxHeight = `${maxHeight}px`;
    }

    // Remove width 100% and align to left
    img.style.width = 'auto';
    img.style.marginLeft = '0';
    img.style.marginRight = 'auto';
}

// Recalculate on window resize
let resizeTimeout: number;
export function initImageConstraints() {
    constrainProductImages();

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
            constrainProductImages();
        }, 250);
    });
}
