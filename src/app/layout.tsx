import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.scss"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_TITLE,
  icons: {
    icon: "/icon-128.png",
  },
  other: {
    renderer: "webkit",
    "app-mobile-web-app-capable": "no",
    "format-detection": "telephone=no",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-cmn-Hans">
      <head>
        <Script strategy="beforeInteractive">
          {`
            console.log(
              "%c--- Handcrafted by Renqiang. and with 💚 by WeChat Ads Design ---",
              "color: #fff; background: #07c160; padding: 8px;"
            )

            // 注入登录态
            window.token = "{{token}}"
            window.machine_key = "{{machine_key}}"

            // 重置滚动条
            if (history.scrollRestoration) {
              history.scrollRestoration = "manual"
            }

            // 分享相关，写在这里是为了在页面加载完成前就能执行
            var bindit = function () {
              WeixinJSBridge.on("menu:share:appmessage", function () {
                WeixinJSBridge.invoke(
                  "sendAppMessage",
                  {
                    img_url: "${process.env.NEXT_PUBLIC_SHARE_IMG}",
                    title: "${process.env.NEXT_PUBLIC_SHARE_TITLE}",
                    desc: "${process.env.NEXT_PUBLIC_SHARE_DESC}",
                    link: "${process.env.NEXT_PUBLIC_URL}",
                  },
                  function (e) {}
                )
              })
              WeixinJSBridge.on("menu:share:timeline", function () {
                WeixinJSBridge.invoke(
                  "shareTimeline",
                  {
                    img_url: "${process.env.NEXT_PUBLIC_SHARE_IMG}",
                    title: "${process.env.NEXT_PUBLIC_SHARE_TITLE}",
                    desc: "${process.env.NEXT_PUBLIC_SHARE_DESC}",
                    link: "${process.env.NEXT_PUBLIC_URL}",
                  },
                  function (e) {}
                )
              })
              WeixinJSBridge.invoke("hideNavigationBarLoading")
            }
            void 0 === window.WeixinJSBridge
              ? document.addEventListener("WeixinJSBridgeReady", bindit, !1)
              : bindit()
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
