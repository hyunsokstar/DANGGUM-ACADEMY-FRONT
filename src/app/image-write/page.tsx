"use client"
import React, { useRef, useState, ChangeEvent } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Button } from "@/components/ui/button"
import { Pen, Undo2, Redo2, Trash2, Download, Upload } from 'lucide-react';

type Tool = 'pen' | 'text';

const ImageAnnotation: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
    const [strokeColor, setStrokeColor] = useState<string>('#000000');
    const [strokeWidth, setStrokeWidth] = useState<number>(4);
    const [tool, setTool] = useState<Tool>('pen');
    const [text, setText] = useState<string>('');
    const canvasRef = useRef<ReactSketchCanvasRef | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    setBackgroundImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleSave = () => {
        if (canvasRef.current) {
            canvasRef.current.exportImage('png')
                .then((data: string) => {
                    const link = document.createElement('a');
                    link.href = data;
                    link.download = 'annotated-image.png';
                    link.click();
                })
                .catch((e: Error) => {
                    console.error('Error exporting image:', e);
                });
        }
    };

    return (
        <div className='p-4'>
            <div className='mb-4 flex items-center gap-4'>
                <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className='w-8 h-8'
                />
                <div className='flex items-center gap-2'>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={strokeWidth}
                        onChange={(e) => setStrokeWidth(Number(e.target.value))}
                        className='w-32'
                    />
                    <span>{strokeWidth}px</span>
                </div>
                <Button variant="outline" size="icon" onClick={() => setTool('pen')}><Pen size={16} /></Button>
                <Button variant="outline" size="icon" onClick={() => canvasRef.current?.undo()}><Undo2 size={16} /></Button>
                <Button variant="outline" size="icon" onClick={() => canvasRef.current?.redo()}><Redo2 size={16} /></Button>
                <Button variant="outline" size="icon" onClick={() => canvasRef.current?.clearCanvas()}><Trash2 size={16} /></Button>
                <Button variant="outline" size="icon" onClick={handleSave}><Download size={16} /></Button>
                <Button variant="outline" size="icon" onClick={handleUploadClick}><Upload size={16} /></Button>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className='hidden'
                />
            </div>
            <div
                style={{
                    position: 'relative',
                    width: '500px',
                    height: '500px',
                    border: '2px dashed #ccc',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {!backgroundImage && (
                    <p className="text-gray-400">Upload an image to start annotating</p>
                )}
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt="Uploaded"
                        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                )}
                <ReactSketchCanvas
                    ref={canvasRef}
                    width="500px"
                    height="500px"
                    strokeWidth={strokeWidth}
                    strokeColor={strokeColor}
                    backgroundImage={backgroundImage || undefined}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </div>
            {tool === 'text' && (
                <div className='mt-4'>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text"
                        className='mr-2 p-2 border rounded'
                    />
                </div>
            )}
        </div>
    );
};

export default ImageAnnotation;