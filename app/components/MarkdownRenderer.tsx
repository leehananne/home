import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom component for responsive columns (Notion-like behavior)
          div: ({ className, children }) => {
            if (className?.includes('notion-columns')) {
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  {children}
                </div>
              )
            }
            return <div className={className}>{children}</div>
          },
          
          // Custom styling for headings
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-900 dark:text-gray-100">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900 dark:text-gray-100">
              {children}
            </h3>
          ),
          
          // Custom styling for paragraphs
          p: ({ children }) => (
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          
          // Custom styling for lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              {children}
            </ol>
          ),
          
          // Custom styling for code blocks
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <code className={`${className} bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm`}>
                {children}
              </code>
            ) : (
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                {children}
              </code>
            )
          },
          
          // Custom styling for blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          
          // Custom styling for horizontal rules
          hr: () => (
            <hr className="border-gray-300 dark:border-gray-600 my-8" />
          ),
          
          // Custom styling for tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
