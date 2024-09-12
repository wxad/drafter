import clsx from "clsx"
import Image from "next/image"
import logo from "@/assets/wxad-design.svg"
import Video from "@/components/Video"
import ArtDots from "@/components/ArtDots"

export default function Home() {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "bg-neutral-100",
        "border-x border-solid border-neutral-200"
      )}
    >
      <ArtDots />
      <div className="sticky top-0 z-50 bg-white border-b border-solid border-neutral-200">
        <div className="px-6 h-16 mx-auto flex items-center justify-between">
          <div className="flex gap-2 items-center font-semibold">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path
                d="M29.3346 16.0003C29.3346 22.2857 29.3346 25.4283 27.3813 27.3803C25.4306 29.3337 22.2866 29.3337 16.0013 29.3337C9.71597 29.3337 6.5733 29.3337 4.61997 27.3803C2.66797 25.4297 2.66797 22.2857 2.66797 16.0003C2.66797 9.71499 2.66797 6.57233 4.61997 4.61899C6.57464 2.66699 9.71597 2.66699 16.0013 2.66699"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2.66797 16.6672L5.00397 14.6232C5.58948 14.1113 6.34763 13.841 7.12493 13.8669C7.90223 13.8929 8.64063 14.2133 9.19064 14.7632L14.9106 20.4832C15.3545 20.927 15.9407 21.2 16.566 21.2541C17.1914 21.3082 17.8158 21.1401 18.3293 20.7792L18.728 20.4992C19.4688 19.9789 20.3641 19.7253 21.2677 19.7798C22.1713 19.8343 23.0297 20.1936 23.7026 20.7992L28.0013 24.6672"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M24.7525 3.91413L25.3085 3.35813C25.7527 2.92376 26.3504 2.68209 26.9717 2.68558C27.593 2.68907 28.1879 2.93744 28.6272 3.37677C29.0665 3.81611 29.3149 4.41098 29.3184 5.03229C29.3219 5.6536 29.0802 6.25122 28.6458 6.69546L28.0898 7.25146M24.7525 3.91413C24.7525 3.91413 24.8218 5.0968 25.8645 6.13946C26.9072 7.18213 28.0898 7.25146 28.0898 7.25146M24.7525 3.91413L19.6392 9.02746C19.2925 9.37413 19.1192 9.54746 18.9725 9.73813C18.7963 9.96324 18.6452 10.2069 18.5218 10.4648C18.4178 10.6835 18.3405 10.9155 18.1858 11.3795L17.6898 12.8675M28.0898 7.25146L22.9765 12.3648C22.6298 12.7115 22.4565 12.8848 22.2658 13.0315C22.0407 13.2077 21.7971 13.3588 21.5392 13.4821C21.3205 13.5861 21.0885 13.6635 20.6245 13.8181L19.1365 14.3141M17.6898 12.8675L17.3685 13.8301C17.3312 13.9422 17.3258 14.0625 17.353 14.1775C17.3803 14.2925 17.439 14.3976 17.5226 14.4811C17.6062 14.5646 17.7114 14.6231 17.8265 14.6502C17.9415 14.6772 18.0618 14.6716 18.1738 14.6341L19.1365 14.3141M17.6898 12.8675L19.1365 14.3141"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            Drafter - 公众号编辑插件
          </div>
          <a href="https://wxad.design">
            <Image className="block w-24" src={logo} alt="wxad.design" />
          </a>
        </div>
      </div>
      <div className="relative z-1 mx-auto px-12 max-w-[1088px] w-3/4 min-w-[640px]">
        <div className="mt-8 mb-4 text-xl font-bold">安装使用</div>
        <div className="text-sm space-y-2">
          <div>
            1.{" "}
            <a
              href="https://github.com/wxad/wxad-drafter/archive/refs/heads/main.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-500 hover:underline hover:decoration-dotted hover:decoration-current hover:underline-offset-4"
            >
              下载插件
            </a>
            ，并解压到本地
          </div>
          <div>
            2. 在 Chrome 地址栏输入{" "}
            <code className="px-2 py-1 bg-neutral-200 rounded-sm">
              chrome://extensions/
            </code>{" "}
            进入扩展程序管理页面
          </div>
          <div>3. 开启右上角的开发者模式</div>
          <div>
            4. 点击左上角的 加载已解压的扩展程序，选择刚才解压的文件夹{" "}
            <code className="px-2 py-1 bg-neutral-200 rounded-sm">
              wxad-drafter-main
            </code>{" "}
            下的{" "}
            <code className="px-2 py-1 bg-neutral-200 rounded-sm">build</code>{" "}
            文件夹
          </div>
        </div>
        <div className="mt-16 mb-4 text-xl font-bold">功能演示</div>
        <div className="mt-8 mb-4 font-medium">1. 模块编辑</div>
        <Video src="https://wxa.wxs.qq.com/wxad-design/yijie/wxad-draft-demo-0.mp4" />
        <div className="mt-8 mb-4 font-medium">2. 间距调整</div>
        <Video src="https://wxa.wxs.qq.com/wxad-design/yijie/wxad-draft-demo-1.mp4" />
      </div>
      <div className="relative z-1 mt-16 py-16 font-medium text-sm text-neutral-300 bg-white border-t border-solid border-neutral-200">
        <div className="text-center mx-auto px-48 max-w-1800">
          <div className="flex justify-center">
            <div className="relative mr-[1px] w-[30px] h-[30px] bg-neutral-300 rounded-b-full">
              <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-neutral-50 rounded-tl-full rounded-br-full" />
            </div>
            <div className="mr-[1px] relative w-[30px] h-[30px]">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-neutral-300 rounded-tr-full rounded-bl-full" />
              <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-neutral-300 rounded-tl-full rounded-br-full" />
              <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-neutral-300 rounded-tr-full rounded-bl-full" />
              <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-neutral-300 rounded-tl-full rounded-br-full" />
            </div>
            <div className="w-[30px] h-[30px]">
              <div className="mb-[3px] h-2 bg-neutral-300" />
              <div className="mb-[3px] h-2 bg-neutral-300" />
              <div className="h-2 bg-neutral-300" />
            </div>
          </div>
          <div className="mt-2">aragakey@qq.com</div>
        </div>
      </div>
    </div>
  )
}
