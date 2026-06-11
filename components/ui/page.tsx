'use client';

import { CursorFollower } from "@/components/ui/cursor-follower";

export default function DemoPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center dark:bg-gray-900 bg-gray-100 text-gray-800 dark:text-gray-200 p-8">
            <h1 className="text-4xl font-bold mb-8">Smooth Follower Demo</h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <a
                    href="#"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
                >
                    Hover over me
                </a>
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200">
                    Another interactive element
                </button>
            </div>

            <CursorFollower />
        </div>
    );
}