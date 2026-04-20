'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { UploadCloud, Loader2, X } from 'lucide-react';
import Image from 'next/image';

interface ImageUploaderProps {
  name?: string;
  defaultValue?: string;
}

export function ImageUploader({ name = 'imageUrl', defaultValue = '' }: ImageUploaderProps) {
  const [url, setUrl] = useState<string>(defaultValue);
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
      const filePath = `cars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('icargezina')
        .upload(filePath, file, { cacheControl: '3600', upsert: false });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('icargezina').getPublicUrl(filePath);
      setUrl(data.publicUrl);
    } catch (error: any) {
      alert(`Error uploading image: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <input type="hidden" name={name} value={url} />
      
      {url ? (
        <div className="relative h-48 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100 group">
          {/* We bypass Next Image restrictions for admin uploads safely with unoptimized */}
          <Image src={url} alt="Uploaded car" fill className="object-cover" unoptimized referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button 
              type="button" 
              onClick={() => setUrl('')}
              className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 transition">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          {uploading ? (
            <div className="flex flex-col items-center text-slate-500">
              <Loader2 className="w-8 h-8 mb-2 animate-spin text-blue-500" />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center pointer-events-none text-slate-500">
              <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
              <p className="text-sm font-medium">Click or drag image to upload</p>
              <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG up to 5MB</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
