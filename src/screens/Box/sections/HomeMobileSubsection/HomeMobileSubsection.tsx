import {
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const decorativeStars = [
  {
    className: "top-[115px] left-[317px] w-[49px] h-[49px]",
    src: "/streamline-sharp-star-2-solid.svg",
  },
  {
    className: "top-[635px] left-[165px] w-[76px] h-[76px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
  {
    className: "top-[199px] left-[70px] w-[52px] h-[52px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
  {
    className: "top-[210px] left-[207px] w-[52px] h-[52px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
];

const decorativeCircles = [
  {
    className:
      "top-[721px] left-14 w-[26px] h-[26px] bg-[#fefefe7d] rounded-[28px]",
  },
  {
    className:
      "top-[583px] left-[333px] w-[19px] h-[19px] bg-[#fefefe7d] rounded-[28px]",
  },
];

const categories = [
  { icon: "/icons8-phone-100.png", label: "Mobile Phones", width: "w-[207px]" },
  { icon: "/icons8-laptop-100-1.png", label: "Laptops", width: "w-[170px]" },
  { icon: "/icons8-books-100-1.png", label: "Books", width: "w-[151px]" },
  {
    icon: "/icons8-id-card-100--2--1.png",
    label: "ID Cards",
    width: "w-[225px]",
  },
  { icon: "/vector-3.svg", label: "Others", width: "w-[389px]" },
];

const recentItems = [
  {
    title: "Samsung S24",
    timeAgo: "10hrs ago",
    location: "Night Market",
    reporter: "Enock Queenson",
    image: "/image-6-17.png",
    status: "Found",
  },
  {
    title: "Samsung S24",
    timeAgo: "10hrs ago",
    location: "Night Market",
    reporter: "Enock Queenson",
    image: "/image-6-17.png",
    status: "Found",
  },
];

const faqItems = [
  { question: "How do I report a lost item?" },
  { question: "Who can claim an item?" },
  { question: "How fast are items updated?" },
  { question: "Can I add a photo of the item?" },
  { question: "What happens after I claim an item?" },
];

export const HomeMobileSubsection = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen relative mt-[233px] bg-white overflow-hidden">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 w-full h-[832px] bg-[#ffd8cc]" />

      {/* Decorative Line */}
      <div className="absolute top-[793px] left-[211px] w-[1009px] h-[7px] bg-black" />

      {/* Decorative Stars */}
      {decorativeStars.map((star, index) => (
        <img
          key={`star-${index}`}
          className={`absolute ${star.className}`}
          alt="Streamline sharp"
          src={star.src}
        />
      ))}

      {/* Decorative Circles */}
      {decorativeCircles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.className}`}
        />
      ))}

      {/* Header */}
      <header className="inline-flex items-center gap-[89px] absolute top-3.5 left-[calc(50.00%_-_193px)]">
        <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
          <MenuIcon className="w-10 h-10 text-black" />
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="text-black relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
              L
            </div>
            <img
              className="relative w-[27px] h-[49px]"
              alt="Icon park outline"
              src="/icon-park-outline-search.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
              <span className="font-black text-black">st</span>
              <span className="font-black text-[#bc7f40]">It</span>
            </div>
          </div>
        </div>
        <Button className="w-[130px] h-11 bg-[#f0ba72] hover:bg-[#e0aa62] text-black border-2 border-black shadow-[0px_4px_4px_#00000040] rounded [font-family:'Rubik',Helvetica] font-medium text-lg">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col w-[363px] items-center gap-9 absolute top-[244px] left-[34px]">
        <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="absolute top-[131px] left-5 w-[52px] h-[52px]"
            alt="Streamline sharp"
            src="/streamline-sharp-star-2-solid-1.svg"
          />

          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'SF_Compact-Regular',Helvetica] font-normal text-transparent text-[26px] text-center tracking-[0] leading-[39.6px]">
              <span className="text-black">
                Lost Something On Campus?
                <br />
                Let&apos;s Help You{" "}
              </span>
              <span className="text-[#bc7f40]">Find It</span>
            </h1>

            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-[#999999] text-[15px] text-center tracking-[0] leading-[22.8px]">
              Searched every corner of campus? Don&apos;t stress! Post, search,
              or report lost and found items in minutes. Reconnect with what
              matters
            </p>
          </div>

          <div className="flex h-[52px] items-center gap-2.5 px-[18px] py-3.5 relative self-stretch w-full bg-white rounded-[9px] border-2 border-solid border-[#9c9c9c]">
            <SearchIcon className="w-6 h-6 text-[#bfbfbf]" />
            <Input
              className="border-0 bg-transparent p-0 [font-family:'Roboto',Helvetica] font-medium text-[#bfbfbf] text-base placeholder:text-[#bfbfbf] focus-visible:ring-0"
              placeholder="SearchIcon for an item..."
            />
          </div>
        </div>

        <div className="flex w-[363px] items-center gap-4 relative flex-[0_0_auto]">
          <Button className="w-[167px] h-12 bg-[#ffc5c5] hover:bg-[#ffb5b5] text-black border-2 border-black shadow-[0px_4px_4px_#00000040] rounded-[31px] [font-family:'Roboto',Helvetica] font-medium text-lg h-auto">
            Report an item
          </Button>
          <Button className="w-[182px] h-12 bg-[#bc7f40] hover:bg-[#ac6f30] text-white border-2 border-black shadow-[0px_4px_4px_#00000040] rounded-[31px] [font-family:'Roboto',Helvetica] font-medium text-lg h-auto">
            Browse lost items
          </Button>
        </div>
      </section>

      {/* Frame Image */}
      <img
        className="absolute top-[781px] left-[15px] w-[179px] h-[35px]"
        alt="Frame"
        src="/frame-264.svg"
      />

      {/* Categories Section */}
      <section className="absolute top-[891px] left-[19px]">
        <h2 className="[font-family:'Roboto',Helvetica] font-medium text-[#3a3a3a] text-2xl tracking-[0] leading-[36.5px] whitespace-nowrap mb-[54px]">
          Categories of Items
        </h2>

        <div className="flex flex-wrap w-[389px] h-[213px] items-start justify-between gap-[0px_22px]">
          {categories.map((category, index) => (
            <Card
              key={`category-${index}`}
              className={`flex flex-col ${category.width} h-16 items-center justify-center bg-white rounded-lg border-2 border-[#ffc5c5] shadow-[0px_2px_6px_1px_#0000001f] cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-2.5">
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[41px] h-[41px] object-cover"
                    alt={category.label}
                    src={category.icon}
                  />
                  <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-black text-base tracking-[0] leading-[24.3px] whitespace-nowrap">
                    {category.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recently Reported Items Section */}
      <section className="flex flex-col w-[389px] items-center absolute top-[1200px] left-[19px]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-[30.4px]">
          Recently Reported Items
        </h2>
        <p className="relative self-stretch [font-family:'Rubik',Helvetica] font-normal text-[#7e7474] text-[15px] text-center tracking-[0] leading-[22.8px]">
          Latest items reported across campus. Check if yours is here.
        </p>
      </section>

      {/* Item Cards Grid */}
      <div className="flex flex-col w-[376px] items-start gap-[22px] absolute top-[1286px] left-[calc(50.00%_-_188px)]">
        {[1, 2, 3].map((row) => (
          <div
            key={`row-${row}`}
            className="flex items-center gap-[18px] relative self-stretch w-full flex-[0_0_auto]"
          >
            {recentItems.map((item, index) => (
              <Card
                key={`item-${row}-${index}`}
                className="flex w-[179px] h-[297px] items-start justify-center bg-[#ffd8cc] rounded-[15px] border-0 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-2 relative w-[167px] h-[283px]">
                  <div className="absolute top-0 left-0 w-[167px] h-[166px]">
                    <img
                      className="absolute top-0 left-0 w-[167px] h-[166px] rounded-[9px] object-cover"
                      alt="Item image"
                      src={item.image}
                    />
                    <Badge className="absolute top-[3px] left-[3px] bg-[#3e3e3e75] text-[#cfcfcf] text-xs rounded-[5px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] shadow-blur-glass">
                      {item.status}
                    </Badge>
                    <div className="flex w-[39px] h-1 items-center gap-[5px] absolute top-[157px] left-[calc(50.00%_-_20px)]">
                      <div className="relative w-1.5 h-1.5 mt-[-1.00px] mb-[-1.00px] bg-[#bfbfbf] rounded-[100px]" />
                      <div className="relative w-1.5 h-1.5 mt-[-1.00px] mb-[-1.00px] bg-[#6c6c6c] rounded-[100px]" />
                      <div className="relative w-1.5 h-1.5 mt-[-1.00px] mb-[-1.00px] bg-[#6c6c6c] rounded-[100px]" />
                      <div className="relative w-1.5 h-1.5 mt-[-1.00px] mb-[-1.00px] bg-[#6c6c6c] rounded-[100px]" />
                    </div>
                  </div>

                  <div className="flex flex-col w-[167px] items-start absolute top-[173px] left-0">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-[#505050] text-[15px] tracking-[0] leading-[22.8px]">
                      {item.title}
                    </h3>

                    <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[119px] items-start relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                          <ClockIcon className="w-2.5 h-2.5 text-[#848484]" />
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px] whitespace-nowrap">
                            {item.timeAgo}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                          <MapPinIcon className="w-[9px] h-2 text-[#848484]" />
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px] whitespace-nowrap">
                            {item.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
                          <UserIcon className="w-[9px] h-2 text-[#848484]" />
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px] whitespace-nowrap">
                            {item.reporter}
                          </span>
                        </div>
                      </div>

                      <Button className="w-[167px] h-7 bg-[#f0ba72] hover:bg-[#e0aa62] text-black border border-[#212121] rounded-[32px] [font-family:'Roboto',Helvetica] font-medium text-[13px] leading-[19.8px] h-auto">
                        Claim
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>

      {/* Browse Items Button */}
      <Button className="w-[174px] h-11 bg-[#bc7f40] hover:bg-[#ac6f30] text-white border-2 border-black rounded-[60px] absolute top-[2246px] left-[calc(50.00%_-_87px)] [font-family:'Rubik',Helvetica] font-normal text-xl h-auto">
        Browse items
      </Button>

      {/* FAQ Section */}
      <section className="flex flex-col w-[362px] items-center justify-center gap-6 absolute top-[2339px] left-[calc(50.00%_-_181px)]">
        <div className="flex flex-col items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-black text-2xl text-center tracking-[0] leading-[normal]">
            Quick FAQ
          </h2>
          <p className="relative self-stretch [font-family:'Rubik',Helvetica] font-normal text-[#7e7474] text-[15px] text-center tracking-[0] leading-[22.8px]">
            A quick guide to help you use the platform easily.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-[19px]">
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger className="flex h-[57px] items-center justify-center gap-2.5 px-[18px] py-3.5 bg-[#ededed] rounded-[11px] [font-family:'Roboto',Helvetica] font-semibold text-base text-black hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-[18px] py-3.5">
                {/* FAQ content would go here */}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="absolute top-[2854px] left-0 w-full h-[571px] bg-[#ffd8cc] overflow-hidden">
        <div className="flex flex-col w-[356px] h-[424px] items-start justify-center gap-[66px] absolute top-[34px] left-[calc(50.00%_-_180px)]">
          <div className="flex flex-col w-[251px] items-start gap-[27px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[241px] items-start gap-[13px] relative flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                  <div className="text-neutral-600 relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
                    L
                  </div>
                  <img
                    className="relative w-[27px] h-[49px]"
                    alt="Icon park outline"
                    src="/icon-park-outline-search.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
                    <span className="font-black text-neutral-600">st</span>
                    <span className="font-black text-[#4e2700]">It</span>
                  </div>
                </div>

                <p className="relative flex items-center justify-center self-stretch [font-family:'Inter',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-[normal]">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </p>
              </div>

              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/frame-178-1.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutral-600 text-[13px] tracking-[0] leading-[normal]">
                Get the app on your phone
              </div>

              <Button className="w-[184px] h-[34px] bg-[#bc7f40] hover:bg-[#ac6f30] text-white border border-[#9f9f9f] rounded-md shadow-[0px_6px_7.3px_#0000004c] p-2 h-auto">
                <img
                  className="w-4 h-4 mr-[7px]"
                  alt="Vector"
                  src="/vector.svg"
                />
                <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] font-medium text-[13px] tracking-[-0.47px] leading-[13px]">
                  Download Our Mobile App
                </span>
              </Button>
            </div>
          </div>

          <div className="inline-flex items-start gap-[84px] relative flex-[0_0_auto] mr-[-21.00px]">
            <div className="flex flex-col w-[113px] items-start gap-[13px] relative">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                FEATURES
              </h3>
              <nav className="flex flex-col w-[113px] items-start gap-3 relative flex-[0_0_auto]">
                <a
                  href="#"
                  className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] text-[#707070] text-sm leading-[normal] font-normal tracking-[0] hover:text-[#505050]"
                >
                  Browse missing
                </a>
                <a
                  href="#"
                  className="self-stretch [font-family:'Inter',Helvetica] text-[#707070] text-sm leading-[normal] font-normal tracking-[0] hover:text-[#505050]"
                >
                  Browse Found
                </a>
              </nav>
            </div>

            <div className="flex flex-col w-[180px] items-start gap-[13px] relative">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                HOW TO
              </h3>
              <nav className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <a
                  href="#"
                  className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal] hover:text-[#505050]"
                >
                  Post an item
                </a>
                <a
                  href="#"
                  className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal] hover:text-[#505050]"
                >
                  SearchIcon for a missing item
                </a>
                <a
                  href="#"
                  className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal] hover:text-[#505050]"
                >
                  How to claim an item
                </a>
              </nav>
            </div>
          </div>
        </div>

        <img
          className="absolute top-[493px] left-[calc(50.00%_-_195px)] w-[387px] h-px object-cover"
          alt="Line"
          src="/line-9.svg"
        />

        <div className="flex flex-col w-full items-start gap-2.5 px-[17px] py-0 absolute top-[calc(50.00%_+_222px)] left-[calc(50.00%_-_213px)] bg-[#ffd8cc] rounded-[7px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[7px] before:[background:linear-gradient(169deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex flex-col h-[45px] items-start justify-between relative self-stretch w-full">
            <div className="inline-flex items-center gap-[31px] relative flex-[0_0_auto]">
              <a
                href="#"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#837575] text-xs tracking-[0] leading-[normal] underline hover:text-[#737575]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#837575] text-xs tracking-[0] leading-[normal] underline hover:text-[#737575]"
              >
                Term of Service
              </a>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#7c7979] text-xs tracking-[0] leading-[normal]">
              © LostIt INC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
