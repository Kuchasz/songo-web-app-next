'use client';

import { useState, useEffect } from 'react';
import { getAllGalleryImages, GalleryImage } from '../../repositories/galleryImageRepository';
import pl from '../../resources/pl';

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        const loadImages = async () => {
            const galleryImages = await getAllGalleryImages();
            setImages(galleryImages);
        };
        loadImages();
    }, []);

    const openLightbox = (imagePath: string, index: number) => {
        setSelectedImage(imagePath);
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev' 
            ? (selectedIndex - 1 + images.length) % images.length
            : (selectedIndex + 1) % images.length;
        
        setSelectedIndex(newIndex);
        setSelectedImage(`/images/gallery/${images[newIndex].full}.jpg`);
    };

    return (
        <section className="px-8 py-20 bg-[#f6f7fa] min-h-screen">
            <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-5xl">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tighter text-black mb-4">
                        {pl["gallery.index.header.title"]}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {pl["gallery.index.header.description"]}
                    </p>
                </div>

                <div className="w-full bg-white rounded-3xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div 
                                    className="relative overflow-hidden rounded-xl aspect-square bg-gray-100"
                                    onClick={() => openLightbox(`/images/gallery/${image.full}.jpg`, index)}
                                >
                                    <img
                                        src={`/images/gallery/${image.thumb}.jpg`}
                                        alt={image.alt || `Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback to a placeholder if image doesn't exist
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/hero-black.png';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeLightbox}>
                        <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage}
                                alt="Gallery image"
                                className="max-w-full max-h-full object-contain rounded-lg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/hero-black.png';
                                }}
                            />
                            
                            {/* Close button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Navigation buttons */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => navigateImage('prev')}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => navigateImage('next')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Image counter */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                                {selectedIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                )}
        </section>
    );
}
