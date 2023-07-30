// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/live.png",
          url: "https://www.liveoficial.com.br/",
        },
        {
          title: "title",
          path: "/midwayy.png",
          url: "https://play.google.com/store/apps/details?id=br.com.midway&hl=pt_BR&gl=BR",
        },

        {
          title: "title",
          path: "/banco-do-brasil.png",
          url: "https://apps.apple.com/br/app/banco-do-brasil-abrir-conta/id330984271",
        },
        {
          title: "title",
          path: "/riachuelo.png",
          url: "https://play.google.com/store/apps/details?id=br.com.riachuelo.app&hl=pt_BR&gl=US",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/guanabara.png",
          url: "https://play.google.com/store/apps/details?id=com.bancoguanabara",
        },
        {
          title: "title",
          path: "/techbalance.png",
          url: "https://www.techbalance.com.br/",
        },
        {
          title: "title",
          path: "/jfl.png",
          url: "https://seujflliving.com.br/vhouse",
        },
        {
          title: "title",
          path: "/raia.png",
          url: "https://play.google.com/store/apps/details?id=br.com.drogaraia&hl=pt_BR&gl=US",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/meu-carrinho.png",
          url: "https://meucarrinho.delivery/",
        },
        {
          title: "title",
          path: "/sem-parar.png",
          url: "https://apps.apple.com/br/app/sem-parar/id1440651231",
        },
        {
          title: "title",
          path: "/livelo.png",
          url: "https://www.livelo.com.br/",
        },
        {
          title: "title",
          path: "/valorant.png",
          url: "https://playvalorant.com/pt-br/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gc.png",
          url: "https://gamersclub.gg/",
        },
        {
          title: "title",
          path: "/banqi.png",
          url: "https://apps.apple.com/br/app/banqi-conta-digital/id1457893925",
        },
        {
          title: "title",
          path: "/santa-joana.png",
          url: "https://play.google.com/store/apps/details?id=br.com.mv.personalhealth.santajoana&hl=pt_BR&gl=US",
        },
        {
          title: "title",
          path: "/mob4pay.png",
          url: "https://www.mob4pay.com.br/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/linx.png",
          url: "https://www.linx.com.br/",
        },
        {
          title: "title",
          path: "/seasoned.png",
          url: "https://www.seasoned.cc/",
        },
        {
          title: "title",
          path: "/code7.png",
          url: "https://code7.com/",
        },
        {
          title: "title",
          path: "/ps6Group.png",
        },
      ],
      images: [
        {
          title: "title",
          path: "/sesc.png",
          url: "https://play.google.com/store/apps/details?id=br.org.sesc.credencialvirtual&hl=pt_BR&gl=US",
        },
        {
          title: "title",
          path: "/lello.png",
          url: "https://www.lellocondominios.com.br/",
        },
        {
          title: "title",
          path: "/safra.png",
          url: "https://play.google.com/store/apps/details?id=br.livetouch.safra.net&hl=pt_BR&gl=US",
        },
        {
          title: "title",
          path: "/unifique.png",
          url: "https://play.google.com/store/apps/details?id=com.unifiqueapp&hl=pt_BR&gl=US",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <Link
                            href={`${image.url}`}
                            target="_blank"
                            className="flex flex-row gap-x-2"
                          >
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
