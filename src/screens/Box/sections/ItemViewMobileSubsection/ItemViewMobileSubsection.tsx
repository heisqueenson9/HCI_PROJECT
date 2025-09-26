import { MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const footerFeatures = ["Browse missing", "Browse Found"];

const footerHowTo = [
  "Post an item",
  "SearchIcon for a missing item",
  "How to claim an item",
];

const itemInfo = [
  { label: "Category:", value: "Phone" },
  {
    label: "Reported Location:",
    value: "Balme Library (2nd Floor Study Area)",
  },
  { label: "Date & Time Reported:", value: "Aug 20, 2025 – 11:15 AM" },
  { label: "Status:", value: "Found" },
  {
    label: "Description:",
    value: "Single black earpiece with no case. Slight scratch on the side.",
  },
];

const reporterInfo = [
  { label: "Posted by:", value: "Student #245", isLink: true },
  { label: "Contact(WhatsApp):", value: "+233 594 399 205", isLink: false },
];

export const ItemViewMobileSubsection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[430px] mx-auto relative mt-[378px] bg-white">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-[17px]">
          <MenuIcon className="w-10 h-10 text-black" />

          <div className="flex items-center justify-center">
            <div className="text-black [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px]">
              L
            </div>
            <SearchIcon className="w-[27px] h-[49px] text-black" />
            <div className="[font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px]">
              <span className="font-black text-black">st</span>
              <span className="font-black text-[#bc7f40]">It</span>
            </div>
          </div>
        </div>

        <Button className="w-[130px] h-11 bg-[#f0ba72] text-black border-2 border-black shadow-[0px_4px_4px_#00000040] [font-family:'Rubik',Helvetica] font-medium text-lg hover:bg-[#f0ba72]/90">
          Login
        </Button>
      </header>

      <div className="px-4 mt-[400px]">
        <img
          className="w-full h-[424px] object-cover mb-[17px]"
          alt="Frame"
          src="/frame-317.svg"
        />
      </div>

      <div className="px-[29px] mb-8">
        <Card className="w-full bg-white rounded-md shadow-[0px_2px_6px_2px_#75717126,0px_1px_2px_#00000024]">
          <CardContent className="p-[18px]">
            <div className="flex flex-col gap-[13px]">
              <div className="flex flex-col gap-[3px]">
                <h1 className="[font-family:'Amazon_Ember-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[36.5px]">
                  Black Earphones
                </h1>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#7a7a7a] text-xs tracking-[0] leading-[18.3px]">
                  A small black wireless earpiece found on campus.
                </p>
              </div>

              <Separator className="w-full h-px bg-gray-200" />

              <div className="flex flex-col gap-[13px]">
                <h2 className="[font-family:'Amazon_Ember-Medium',Helvetica] font-medium text-black text-[15px] leading-[22.8px] tracking-[0]">
                  Item Information
                </h2>

                <div className="flex gap-[11px]">
                  <div className="w-[126px] flex flex-col gap-1">
                    {itemInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-5">
                        <div className="[font-family:'Amazon_Ember-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[18.3px] whitespace-nowrap">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col w-[170px] gap-1">
                    {itemInfo.map((item, index) => (
                      <div
                        key={index}
                        className="[font-family:'Amazon_Ember-Regular',Helvetica] font-normal text-[#5c5c5c] text-xs tracking-[0] leading-[18.3px]"
                      >
                        {item.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="w-full h-px bg-gray-200" />

              <div className="flex items-center gap-2">
                <Button className="w-[180px] h-8 bg-[#f0ba72] text-black rounded-[5px] [font-family:'Amazon_Ember-Regular',Helvetica] font-normal text-xs leading-[18.3px] hover:bg-[#f0ba72]/90">
                  Claim
                </Button>
                <Button className="w-[130px] h-8 bg-[#dddddd] text-black rounded-[5px] [font-family:'Amazon_Ember-Regular',Helvetica] font-normal text-xs leading-[18.3px] hover:bg-[#dddddd]/90">
                  Report as incorrect
                </Button>
              </div>

              <Separator className="w-full h-px bg-gray-200" />

              <div className="flex flex-col gap-2.5">
                <h2 className="[font-family:'Amazon_Ember-Medium',Helvetica] font-medium text-black text-[15px] leading-[22.8px] tracking-[0]">
                  Reporter Info
                </h2>

                <div className="flex gap-[11px]">
                  <div className="w-[126px] flex flex-col gap-1">
                    {reporterInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-5">
                        <div className="[font-family:'Amazon_Ember-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[18.3px] whitespace-nowrap">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col w-[202px] gap-1">
                    {reporterInfo.map((item, index) => (
                      <div
                        key={index}
                        className={`[font-family:'Amazon_Ember-Regular',Helvetica] font-normal text-xs tracking-[0] leading-[18.3px] ${item.isLink ? "text-[#723fff] underline" : "text-[#5c5c5c]"}`}
                      >
                        {item.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="w-full h-px bg-gray-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="w-full bg-[#ffd8cc] overflow-hidden">
        <div className="flex flex-col w-full items-center gap-[66px] py-[34px] px-[37px]">
          <div className="flex flex-col w-[251px] items-start gap-[27px]">
            <div className="flex flex-col w-[241px] items-start gap-[13px]">
              <div className="flex flex-col items-start gap-[7px] w-full">
                <div className="flex items-center justify-center">
                  <div className="text-neutral-600 [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px]">
                    L
                  </div>
                  <SearchIcon className="w-[27px] h-[49px] text-neutral-600" />
                  <div className="[font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px]">
                    <span className="font-black text-neutral-600">st</span>
                    <span className="font-black text-[#4e2700]">It</span>
                  </div>
                </div>

                <p className="text-center [font-family:'Inter',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-[normal]">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </p>
              </div>

              <img className="w-full" alt="Frame" src="/frame-178-2.svg" />
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="[font-family:'Inter',Helvetica] font-medium text-neutral-600 text-[13px] tracking-[0] leading-[normal]">
                Get the app on your phone
              </div>

              <div className="flex h-[34px] items-center gap-1 w-full">
                <Button className="w-[184px] h-[34px] bg-[#bc7f40] text-white rounded-md border border-[#9f9f9f] shadow-[0px_6px_7.3px_#0000004c] px-2 py-[5px] hover:bg-[#bc7f40]/90">
                  <div className="flex items-center gap-[7px] w-full">
                    <img className="w-4 h-4" alt="Vector" src="/vector.svg" />
                    <div className="[font-family:'SF_Compact_Display-Medium',Helvetica] font-medium text-white text-[13px] tracking-[-0.47px] leading-[13px]">
                      Download Our Mobile App
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-[84px]">
            <div className="flex flex-col w-[113px] items-start gap-[13px]">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                FEATURES
              </h3>
              <div className="flex flex-col w-[113px] items-start gap-3">
                {footerFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-[180px] items-start gap-[13px]">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#727272] text-sm tracking-[0] leading-[normal]">
                HOW TO
              </h3>
              <div className="flex flex-col items-start gap-3 w-full">
                {footerHowTo.map((item, index) => (
                  <div
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#707070] text-sm tracking-[0] leading-[normal]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-[387px] h-px bg-gray-300 mx-auto" />

        <div className="flex flex-col items-start gap-2.5 px-[17px] py-4 bg-[#ffd8cc]">
          <div className="flex flex-col h-[45px] items-start justify-between w-full">
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
        </div>
      </footer>
    </div>
  );
};
