import fs from 'fs';
import path from 'path';
import Markdown from 'react-markdown';

export default async function TrendsMdPage({
  params,
}: {
  params: { venue: string };
}) {
  const { venue } = await params;
  const filePath = path.join(process.cwd(), 'src/app/papers/data/', venue, 'trends', `${venue}_trend_summary.md`);
  
  try {
    const mdContent = await fs.promises.readFile(filePath, 'utf-8');
    
    return (
      <div className="max-w-[1200px] mx-auto">
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h1:mb-8 prose-h1:mt-12 prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mb-6 prose-h2:mt-10 prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-4 prose-h3:mt-8 prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-4 prose-h4:mt-6 prose-h5:text-lg prose-h5:font-semibold prose-h5:mb-3 prose-h5:mt-5 prose-h6:text-base prose-h6:font-semibold prose-h6:mb-3 prose-h6:mt-5 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:my-4 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:text-gray-900 dark:prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-700 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-4 prose-ul:list-disc prose-ol:list-decimal prose-ul:my-4 prose-ol:my-4 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:my-1 prose-table:border-collapse prose-table:w-full prose-table:my-4 prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-700 prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-2 prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700 prose-td:p-2 prose-img:rounded-lg prose-img:my-4">
          <Markdown>{mdContent}</Markdown>
        </article>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-600">未找到趋势总览</p>
      </div>
    );
  }
} 