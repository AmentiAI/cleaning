import Image from "next/image";

/* Real cleaning photos (self-hosted in /public/images, sourced from Pexels —
   free for commercial use). Each fills a 4:3 .media-frame via object-fit cover. */

function Photo({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="media-frame">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 860px) 100vw, 560px"
        style={{ objectFit: "cover" }}
        priority={priority}
      />
    </div>
  );
}

export const ArtInterior = () => (
  <Photo src="/images/interior.jpg" alt="Professional cleaner vacuuming a bright, modern living room" priority />
);
export const ArtLiving = () => (
  <Photo src="/images/residential.jpg" alt="Cleaner wiping down a surface in a tidy home" />
);
export const ArtOffice = () => (
  <Photo src="/images/office.jpg" alt="Uniformed cleaning team servicing a modern commercial space" />
);
export const ArtSparkle = () => (
  <Photo src="/images/deep.jpg" alt="Scrubbing soapy tile during a detailed deep clean" />
);
export const ArtEmptyHome = () => (
  <Photo src="/images/moveinout.jpg" alt="Empty, spotless room with polished hardwood floors" />
);
export const ArtCarpet = () => (
  <Photo src="/images/carpet.jpg" alt="Vacuuming floors to lift dust, pet hair, and allergens" />
);
export const ArtWindows = () => (
  <Photo src="/images/windows.jpg" alt="Cleaning a window to a streak-free shine" />
);
export const ArtTeam = () => (
  <Photo src="/images/team.jpg" alt="O'Neil Cleaning professional with equipment at the service van" />
);
