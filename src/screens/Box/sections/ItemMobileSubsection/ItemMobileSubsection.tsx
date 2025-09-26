import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

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

const itemsData = Array(12).fill({
  title: "Samsung S24",
  timeAgo: "10hrs ago",
  location: "Night Market",
  username: "Enock Queenson",
  image: "/image-6-17.png",
  status: "Found",
});

const footerFeatures = ["Browse missing", "Browse Found"];

const footerHowTo = [
  "Post an item",
  "SearchIcon for a missing item",
  "How to claim an item",
];

const paginationItems = [
  { page: 1, active: true },
  { page: 2, active: false },
  { page: 3, active: false },
];

export const ItemMobileSubsection = (): JSX.Element => {
  return (
    <div className="w-full bg-white relative">
      {decorativeStars.map((star, index) => (
        <img
          key={`star-${index}`}
          className={`absolute ${star.className}`}
          alt="Streamline sharp"
          src={star.src}
        />
      ))}

      {decorativeCircles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.className}`}
        />
      ))}

      <header className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-[17px]">
          <MenuIcon className="w-10 h-10 text-black" />

          <div className="flex items-center justify-center">
            <div className="text-black [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
              L
            </div>
            <img
              className="w-[27px] h-[49px]"
              alt="Icon park outline"
              src="/icon-park-outline-search.svg"
            />
            <div className="[font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
              <span className="font-black text-black">st</span>
              <span className="font-black text-[#bc7f40]">It</span>
            </div>
          </div>
        </div>

        <Button className="w-[130px] h-11 bg-[#f0ba72] text-black text-lg font-medium border-2 border-black shadow-[0px_4px_4px_#00000040] hover:bg-[#e5a85f] h-auto">
          Login
        </Button>
      </header>

      <div className="px-[27px] border-b border-gray-200">
        <div className="h-px"></div>
      </div>

      <section className="px-[27px] py-6">
        <Card className="w-full bg-white rounded-[11px] border-0 shadow-none">
          <CardContent className="p-[7px]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full text-center [font-family:'Rubik',Helvetica] font-medium text-[#6f5959] text-base tracking-[0] leading-[24.3px]">
                  SearchIcon Term
                </div>

                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 flex items-center gap-2.5 px-[18px] py-3.5 bg-white rounded-[9px] border-2 border-[#9c9c9c]">
                    <SearchIcon className="w-6 h-6 text-gray-400" />
                    <Input
                      placeholder="SearchIcon for an item..."
                      className="border-0 p-0 [font-family:'Roboto',Helvetica] font-medium text-[#bfbfbf] text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <img
                    className="w-[52px] h-[52px]"
                    alt="Frame"
                    src="/frame-263.svg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="px-[27px] border-b border-gray-200">
        <div className="h-px"></div>
      </div>

      <main className="px-[27px] py-6">
        <div className="grid grid-cols-2 gap-[18px] gap-y-[23px]">
          {itemsData.map((item, index) => (
            <Card
              key={`item-${index}`}
              className="bg-[#ffd8cc] rounded-[15px] border-0 shadow-none"
            >
              <CardContent className="p-2">
                <div className="relative">
                  <div className="relative w-full h-[166px] mb-2">
                    <img
                      className="w-full h-full rounded-[9px] object-cover"
                      alt="Image"
                      src={item.image}
                    />

                    <Badge className="absolute top-[3px] left-[3px] bg-[#3e3e3e75] text-[#cfcfcf] text-xs font-medium px-3.5 py-0.5 rounded-[5px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] shadow-blur-glass">
                      {item.status}
                    </Badge>

                    <div className="flex items-center gap-[5px] absolute bottom-[9px] left-1/2 transform -translate-x-1/2">
                      <div className="w-1.5 h-1.5 bg-[#bfbfbf] rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#6c6c6c] rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#6c6c6c] rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#6c6c6c] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#505050] text-[15px] tracking-[0] leading-[22.8px]">
                      {item.title}
                    </h3>

                    <div className="space-y-1">
                      <div className="flex items-center gap-[3px]">
                        <ClockIcon className="w-2.5 h-2.5 text-[#848484]" />
                        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px]">
                          {item.timeAgo}
                        </span>
                      </div>

                      <div className="flex items-center gap-[3px]">
                        <MapPinIcon className="w-[9px] h-2 text-[#848484]" />
                        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px]">
                          {item.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-[3px]">
                        <UserIcon className="w-[9px] h-2 text-[#848484]" />
                        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#848484] text-xs tracking-[0] leading-[18.3px]">
                          {item.username}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full h-7 bg-[#f0ba72] text-black text-[13px] font-medium rounded-[32px] border border-[#212121] hover:bg-[#e5a85f] h-auto">
                      Claim
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <div className="flex justify-center px-6 py-4">
        <Pagination>
          <PaginationContent className="flex items-center gap-2">
            <PaginationPrevious className="flex items-center gap-2 px-3 py-2 rounded-lg opacity-50">
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#757575] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)]">
                Previous
              </span>
            </PaginationPrevious>

            {paginationItems.map((item) => (
              <PaginationItem key={item.page}>
                <PaginationLink
                  className={`px-3 py-2 rounded-lg ${
                    item.active
                      ? "bg-[#bc7f40] text-neutral-100"
                      : "text-[#1e1e1e]"
                  } font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)]`}
                >
                  {item.page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationEllipsis className="px-4 py-2 rounded-lg font-body-base-bold font-[number:var(--body-base-bold-font-weight)] text-black text-[length:var(--body-base-bold-font-size)] tracking-[var(--body-base-bold-letter-spacing)] leading-[var(--body-base-bold-line-height)]">
              ...
            </PaginationEllipsis>

            <PaginationNext className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#1e1e1e] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)]">
                Next
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </PaginationNext>
          </PaginationContent>
        </Pagination>
      </div>

      <footer className="bg-[#ffd8cc] overflow-hidden">
        <div className="flex flex-col items-center gap-[66px] px-[37px] py-[34px]">
          <div className="flex flex-col items-start gap-[27px] w-[251px]">
            <div className="flex flex-col items-start gap-[13px] w-[241px]">
              <div className="flex flex-col items-start gap-[7px] w-full">
                <div className="flex items-center justify-center">
                  <div className="text-neutral-600 [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
                    L
                  </div>
                  <img
                    className="w-[27px] h-[49px]"
                    alt="Icon park outline"
                    src="/icon-park-outline-search.svg"
                  />
                  <div className="[font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
                    <span className="font-black text-neutral-600">st</span>
                    <span className="font-black text-[#4e2700]">It</span>
                  </div>
                </div>

                <div className="text-center [font-family:'Inter',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-[normal]">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </div>
              </div>

              <img
                className="flex-[0_0_auto]"
                alt="Frame"
                src="/frame-178.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="[font-family:'Inter',Helvetica] font-medium text-neutral-600 text-[13px] tracking-[0] leading-[normal]">
                Get the app on your phone
              </div>

              <div className="flex h-[34px] items-center gap-1 w-full">
                <div className="flex items-center justify-center gap-2.5 px-2 py-[5px] w-[184px] h-[34px] bg-[#bc7f40] rounded-md border border-[#9f9f9f] shadow-[0px_6px_7.3px_#0000004c] overflow-hidden">
                  <div className="flex items-center gap-[7px] w-full">
                    <img className="w-4 h-4" alt="Vector" src="/vector.svg" />
                    <div className="flex flex-col w-[65px] items-start">
                      <div className="w-[136px] [font-family:'SF_Compact_Display-Medium',Helvetica] font-medium text-white text-[13px] tracking-[-0.47px] leading-[13px]">
                        Download Our Mobile App
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-[84px]">
            <div className="flex flex-col w-[113px] items-start gap-[13px]">
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                FEATURES
              </div>

              <div className="flex flex-col w-[113px] items-start gap-3">
                {footerFeatures.map((feature, index) => (
                  <div
                    key={`feature-${index}`}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-[180px] items-start gap-[13px]">
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                HOW TO
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                {footerHowTo.map((howTo, index) => (
                  <div
                    key={`howto-${index}`}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal]"
                  >
                    {howTo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-[387px] h-px object-cover mx-auto"
          alt="Line"
          src="/line-9.svg"
        />

        <div className="flex flex-col h-[45px] items-start justify-between px-[17px] py-0 bg-[#ffd8cc] rounded-[7px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[7px] before:[background:linear-gradient(169deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex items-center gap-[31px]">
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#837575] text-xs tracking-[0] leading-[normal] underline">
              Privacy Policy
            </div>
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#837575] text-xs tracking-[0] leading-[normal] underline">
              Term of Service
            </div>
          </div>

          <div className="[font-family:'Inter',Helvetica] font-normal text-[#7c7979] text-xs tracking-[0] leading-[normal]">
            © LostIt INC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
