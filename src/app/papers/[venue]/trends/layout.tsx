import Link from 'next/link';

export default function TrendsLayout({ children, params }: any) {
  const { venue } = params;
  
  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <div className="w-48 bg-gray-50 p-4 border-r">
        <div className="space-y-2">
          <Link
            href={`/papers/${venue}/trends/html`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            趋势图
          </Link>
          <Link
            href={`/papers/${venue}/trends/md`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            趋势总览
          </Link>
        </div>
      </div>
      
      {/* 主内容区域 */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
} 