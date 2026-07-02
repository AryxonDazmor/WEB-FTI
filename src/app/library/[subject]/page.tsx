"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { File, Folder, Tree, TreeViewElement } from '@/components/magicui/file-tree';
import { Embed } from '@/components/Section/fiturtest';

const DRIVE_API_URL = process.env.NEXT_PUBLIC_DRIVE_API_URL as string;

type DriveApiNode = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  previewUrl?: string;
  children?: DriveApiNode[];
};

function toTreeElement(node: DriveApiNode): any {
  if (node.type === 'folder') {
    return {
      id: node.id,
      name: node.name,
      children: (node.children || []).map(toTreeElement),
    };
  }
  return {
    id: node.id,
    name: node.name,
    url: node.previewUrl,
  };
}

export default function Page() {
  const params = useParams();
  const subject = (params.subject as string)?.toUpperCase();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [Url, SetUrl] = useState("");
  const [Title, SetTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!subject) return;

    async function loadTree() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${DRIVE_API_URL}?subject=${subject}`);
        const json = await res.json();

        if (!json.success) {
          throw new Error(json.error || "Failed to load files");
        }

        const rootChildren = (json.data.children || []).map(toTreeElement);
        setData(rootChildren);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadTree();
  }, [subject]);

  const renderTree = (elements: any[]) => {
    return elements.map((element) => {
      if (element.children && element.children.length > 0) {
        return (
          <Folder key={element.id} element={element.name} value={element.id}>
            {renderTree(element.children)}
          </Folder>
        );
      }
      return (
        <File key={element.id} value={element.id}>
          <div
            className=""
            onClick={() => {
              if (element.url) {
                SetUrl(element.url);
                SetTitle(element.name);
              }
            }}
          >
            {element.name}
          </div>
        </File>
      );
    });
  };

  return (
    <div className="pt-21 min-h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white p-6 flex gap-2">
      <div className='border border-gray-700 rounded-lg p-4 bg-gray-100 dark:bg-gray-950 h-[85vh] overflow-y-auto $className={isOpen ? "w-1/3" : "w-20"}'>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <svg className="w-6 h-6 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={isOpen ? "block" : "hidden"}>
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
            Daftar Materi {subject}
          </h2>

          {loading && <p className="text-sm text-gray-500">Loading files...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading && !error && data.length === 0 && (
            <p className="text-sm text-gray-500">No files found.</p>
          )}
          {!loading && !error && data.length > 0 && (
            <Tree initialSelectedId={data[0]?.id} indicator={true} elements={data}>
              {renderTree(data)}
            </Tree>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col pt-4 h-[85vh] bg-gray-100 dark:bg-gray-950 text-white">
        {Url ? (
          <Embed header={Title} embed={Url} footer="" />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-xl border border-dashed border-gray-800 rounded-xl">
            <h1>-- Klik file di kiri untuk melihat</h1>
          </div>
        )}
      </div>
    </div>
  );
}