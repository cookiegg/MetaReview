import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link";

interface Conference {
  year: number;
  link: string;
}

interface Venue {
  name: string;
  conferences: Conference[];
  trendLink: string;
}

interface SubfieldData {
  name: string;
  venues: Venue[];
}

// 生成单个会议数据的函数
function generateConferenceData(
  venueName: string,
  startYear: number,
  endYear: number,
  subfield: string,
  yearInterval: number = 1
): SubfieldData {
  // 生成年份数组，考虑间隔
  const years = Array.from(
    { length: Math.floor((endYear - startYear) / yearInterval) + 1 },
    (_, i) => startYear + i * yearInterval
  ).reverse(); // 倒序排列年份

  // 生成会议数据
  const conferences = years.map(year => ({
    year,
    link: `/papers/${venueName.toLowerCase()}/${year}`
  }));

  return {
    name: subfield,
    venues: [
      {
        name: venueName.toUpperCase(),
        conferences,
        trendLink: `/papers/${venueName.toLowerCase()}/trends`
      }
    ]
  };
}

// 合并相同子领域的会议
function mergeSubfields(data: SubfieldData[]): SubfieldData[] {
  const mergedMap = new Map<string, SubfieldData>();

  data.forEach(item => {
    if (mergedMap.has(item.name)) {
      // 如果子领域已存在，合并venues
      const existing = mergedMap.get(item.name)!;
      existing.venues.push(...item.venues);
    } else {
      // 如果子领域不存在，直接添加
      mergedMap.set(item.name, { ...item });
    }
  });

  return Array.from(mergedMap.values());
}

// 使用函数生成会议数据
const tableData: SubfieldData[] = mergeSubfields([
  generateConferenceData("icra", 2021, 2025, "Robotics"),
  generateConferenceData("rss", 2023, 2025, "Robotics"),
  generateConferenceData("corl", 2021, 2024, "Robotics"),
  generateConferenceData("iros", 2021, 2024, "Robotics"),
  generateConferenceData("cdc", 2020, 2024, "Control"),
  generateConferenceData("acc", 2023, 2025, "Control"),
  generateConferenceData("l4dc", 2022, 2025, "Control"),
  generateConferenceData("ifac-wc", 2021, 2024, "Control"),
  generateConferenceData("neurips", 2021, 2024, "Artificial Intelligence"),
  generateConferenceData("iclr", 2021, 2025, "Artificial Intelligence"),
  generateConferenceData("icml", 2021, 2025, "Artificial Intelligence"),
  generateConferenceData("cvpr", 2021, 2024, "Computer Vision"),
  generateConferenceData("iccv", 2019, 2023, "Computer Vision", 2),  // 两年一次
  generateConferenceData("eccv", 2018, 2024, "Computer Vision", 2),  // 两年一次
]);

// 生成会议下拉菜单的函数
function ConferenceDropdown({ venue }: { venue: Venue }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm hover:bg-gray-100 transition-colors">
          {venue.name}
          <span className="text-xs text-gray-400">
            {venue.conferences.length > 0 
              ? `${Math.min(...venue.conferences.map(c => c.year))}-${Math.max(...venue.conferences.map(c => c.year))}`
              : ''}
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
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem asChild>
          <a href={venue.trendLink} target="_blank" rel="noopener noreferrer">
            近年总体趋势
          </a>
        </DropdownMenuItem>
        {venue.conferences.map((conf) => (
          <DropdownMenuItem key={conf.year} asChild>
            <a href={conf.link} target="_blank" rel="noopener noreferrer">
              {conf.year}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 社交媒体链接 */}
      <div className="absolute top-8 right-8 flex gap-4">
        <Link
          href="https://x.com/XuefW82242"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </Link>
        <Link
          href="https://github.com/cookiegg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
        <Link
          href="https://www.zhihu.com/people/14-22-97-95-82"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M351.791182 562.469462l192.945407 0c0-45.367257-21.3871-71.939449-21.3871-71.939449L355.897709 490.530013c3.977591-82.182744 7.541767-187.659007 8.816806-226.835262l159.282726 0c0 0-0.86367-67.402109-18.578124-67.402109s-279.979646 0-279.979646 0 16.850783-88.141456 39.318494-127.053698c0 0-83.60514-4.510734-112.121614 106.962104S81.344656 355.077018 76.80834 367.390461c-4.536316 12.313443 24.62791 5.832845 36.941354 0 12.313443-5.832845 68.050885-25.924439 84.252893-103.69571l86.570681 0c1.165546 49.28652 4.596691 200.335724 3.515057 226.835262L109.86113 490.530013c-25.275663 18.147312-33.701566 71.939449-33.701566 71.939449L279.868105 562.469462c-8.497535 56.255235-23.417339 128.763642-44.275389 167.210279-33.05279 60.921511-50.55235 116.65793-169.802314 212.576513 0 0-19.442818 14.257725 40.829917 9.073656 60.273758-5.185093 117.305683-20.739347 156.840094-99.807147 20.553105-41.107233 41.805128-93.250824 58.386782-146.138358l-0.055259 0.185218 167.855986 193.263655c0 0 22.035876-51.847855 5.832845-108.880803L371.045711 650.610918l-42.1244 31.157627-0.045025 0.151449c11.69946-41.020252 20.11206-81.5749 22.726607-116.858498C351.665315 564.212152 351.72876 563.345412 351.791182 562.469462z"  />
            <path d="M584.918753 182.033893l0 668.840094 70.318532 0 28.807093 80.512708 121.875768-80.512708 153.600307 0L959.520453 182.033893 584.918753 182.033893zM887.150192 778.934538l-79.837326 0-99.578949 65.782216-23.537066-65.782216-24.855084 0L659.341766 256.673847l227.807403 0L887.149169 778.934538z"  />
          </svg>
        </Link>
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            MetaReview
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            See the trends. Find your path.
          </p>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-500 max-w-2xl">
            Let AI read the papers for you. MetaReview helps you discover trends, spot opportunities, and find research directions that truly matter.
          </p>
        </div>

        {/* 表格部分 */}
        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold mb-4">Conferences / Venues</h2>
          <p className="text-sm text-gray-500 mb-6">Data Acquired from Papercopilot, Openreview, Official Sites, and Community</p>

          <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Field
                </TableHead>
                <TableHead
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Conferences / Venues
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
                        <ConferenceDropdown key={venue.name} venue={venue} />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <footer className="w-full text-center text-sm text-gray-500 dark:text-gray-500 mt-8 max-w-2xl px-4">
        <p>
          Many thanks to <Link href="https://jingyangcarl.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jing Yang</Link> for creating the <Link href="https://github.com/papercopilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PaperCopilot</Link> project.
        </p>
        <p className="mt-1">
          Except for conferences in the control domain, all other datasets used in this project are adapted with minor modifications from PaperCopilot.
        </p>
      </footer>
        
      </main>


    </div>
  );
}
