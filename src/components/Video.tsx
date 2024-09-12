"use client"

const Video = ({ src }: { src: string }) => {
  return (
    <video
      ref={(el) => {
        el?.play()
      }}
      className="block w-full h-auto object-cover border border-solid border-neutral-300 rounded"
      src={src}
      preload="auto"
      x-webkit-airplay="true"
      webkit-playsinline="true"
      playsInline
      muted
      loop
    />
  )
}

export default Video
