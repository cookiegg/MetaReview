import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Conference {
  year: number;
  link: string;
}

interface Venue {
  name: string;
  conferences: Conference[];
}

interface SubfieldData {
  name: string;
  venues: Venue[];
}

const tableData: SubfieldData[] = [
  {
    name: "Artificial Intelligence",
    venues: [
      {
        name: "NeurIPS",
        conferences: [
          { year: 2024, link: "/papers/neurips/2024" },
          { year: 1987, link: "/papers/neurips/1987" },
        ],
      },
      {
        name: "ICLR",
        conferences: [
          { year: 2025, link: "/papers/iclr/2025" },
          { year: 2013, link: "/papers/iclr/2013" },
        ],
      },
    ],
  },
  {
    name: "Computational Linguistics",
    venues: [
      {
        name: "ACL",
        conferences: [
          { year: 2025, link: "/papers/acl/2025" },
          { year: 2021, link: "/papers/acl/2021" },
        ],
      },
      {
        name: "NAACL",
        conferences: [
          { year: 2025, link: "/papers/naacl/2025" },
          { year: 2021, link: "/papers/naacl/2021" },
          { year: 2024, link: "/papers/naacl/2024" },
          { year: 2022, link: "/papers/naacl/2022" },
          { year: 2021, link: "/papers/naacl/2021" },
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* 表格部分 */}
        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold mb-4">Conferences / Venues</h2>
          <p className="text-sm text-gray-500 mb-6">Data Acquired from Openreview, Official Sites, and Community</p>

          <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Subfield
                </TableHead>
                <TableHead
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Conferences / Venues (Hover for quick links)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {tableData.map((subfield) => (
                <TableRow key={subfield.name}>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subfield.name}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {subfield.venues.map((venue) => (
                        <DropdownMenu key={venue.name}>
                          <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm hover:bg-gray-100 transition-colors">
                              {venue.name}
                              <span className="text-xs text-gray-400">
                                {venue.conferences.length > 0 ? venue.conferences[0].year : ''}
                              </span>
                              <svg
                                className="-mr-1 ml-1 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            {venue.conferences.map((conf) => (
                              <DropdownMenuItem key={conf.year} asChild>
                                <a href={conf.link} target="_blank" rel="noopener noreferrer">
                                  {conf.year} - Paper List
                                </a>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
