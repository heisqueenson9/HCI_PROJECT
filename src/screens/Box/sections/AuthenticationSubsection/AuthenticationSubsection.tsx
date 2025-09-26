import { LockIcon, MailIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const decorativeElements = [
  {
    type: "star",
    className: "absolute top-[115px] left-[317px] w-[49px] h-[49px]",
    src: "/streamline-sharp-star-2-solid.svg",
  },
  {
    type: "circle",
    className:
      "absolute top-[721px] left-14 w-[26px] h-[26px] bg-[#fefefe7d] rounded-[28px]",
  },
  {
    type: "circle",
    className:
      "absolute top-[583px] left-[333px] w-[19px] h-[19px] bg-[#fefefe7d] rounded-[28px]",
  },
  {
    type: "star",
    className: "absolute top-[635px] left-[165px] w-[76px] h-[76px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
  {
    type: "star",
    className: "absolute top-[199px] left-[70px] w-[52px] h-[52px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
  {
    type: "star",
    className: "absolute top-[210px] left-[207px] w-[52px] h-[52px]",
    src: "/streamline-sharp-star-2-solid-1.svg",
  },
];

export const AuthenticationSubsection = (): JSX.Element => {
  return (
    <div className="w-full h-[711px] relative bg-white overflow-hidden">
      <div className="absolute top-[793px] left-[211px] w-[1009px] h-[7px] bg-black" />

      {decorativeElements.map((element, index) =>
        element.type === "star" ? (
          <img
            key={`decorative-${index}`}
            className={element.className}
            alt="Streamline sharp"
            src={element.src}
          />
        ) : (
          <div key={`decorative-${index}`} className={element.className} />
        ),
      )}

      <header className="inline-flex items-center justify-center absolute top-[62px] left-[calc(50.00%_-_55px)]">
        <div className="text-black relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-black text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
          L
        </div>

        <SearchIcon className="relative w-[27px] h-[49px]" />

        <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-[48.7px] whitespace-nowrap">
          <span className="font-black text-black">st</span>
          <span className="font-black text-[#bc7f40]">It</span>
        </div>
      </header>

      <main className="flex w-[358px] h-[528px] items-center justify-center gap-2.5 px-[33px] py-[18px] absolute top-[151px] left-[calc(50.00%_-_180px)] bg-white rounded-xl">
        <Card className="flex flex-col w-[350px] items-center gap-3 relative ml-[-29.00px] mr-[-29.00px] border-0 shadow-none">
          <CardContent className="flex flex-col items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto] p-0">
            <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-[27px] relative self-stretch w-full flex-[0_0_auto]">
                  <h1 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#636363] text-[22px] text-center leading-[normal] relative tracking-[0]">
                    Login
                  </h1>

                  <div className="flex flex-col items-end gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-around gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[352px] h-[50px] items-start justify-around gap-2.5 px-[18px] py-[11px] relative ml-[-1.00px] mr-[-1.00px] bg-[#efefef82] rounded-xl border border-solid border-[#d6d6d6]">
                        <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                          <MailIcon className="relative w-[18px] h-[18px] text-[#8f8f8f]" />
                          <Input
                            className="border-0 bg-transparent p-0 h-auto text-[15px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] placeholder:text-[#8f8f8f]"
                            defaultValue="student@st.ug.edu.gh"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-around gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[346px] h-[50px] items-start justify-center gap-2.5 px-[18px] py-[11px] relative bg-[#efefef82] rounded-xl border border-solid border-[#d6d6d6]">
                        <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                          <LockIcon className="relative w-[23px] h-[23px] text-[#8f8f8f]" />
                          <Input
                            className="border-0 bg-transparent p-0 h-auto text-[15px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] placeholder:text-[#8f8f8f]"
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="link"
                  className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-[#7068ff] text-xs text-right tracking-[0] leading-[normal] underline h-auto p-0 justify-end"
                >
                  Forgot Password
                </Button>
              </div>

              <Button className="flex h-[52px] items-center justify-center gap-2.5 pl-[198px] pr-[193px] py-3.5 relative self-stretch w-full bg-[#f1ba6d] rounded-xl hover:bg-[#f1ba6d]/90">
                <span className="w-fit mt-[-2.50px] mb-[-0.50px] ml-[-45.00px] mr-[-45.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg leading-[normal] relative tracking-[0]">
                  Login
                </span>
              </Button>
            </div>

            <div className="relative w-[432px] h-[26px] ml-[-41.00px] mr-[-41.00px]">
              <img
                className="absolute top-3 left-0.5 w-[430px] h-px object-cover"
                alt="Line"
                src="/line-1.svg"
              />

              <div className="flex flex-col w-[26px] h-[26px] items-center justify-center absolute top-0 left-[197px] bg-[#f9f9f9]">
                <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#a7a7a7] text-[13px] text-center tracking-[0] leading-[normal]">
                  Or
                </div>
              </div>
            </div>
          </CardContent>

          <div className="flex flex-col w-[419px] items-center gap-4 relative flex-[0_0_auto] ml-[-34.50px] mr-[-34.50px]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[13px] text-center tracking-[0] leading-[normal]">
              <span className="font-medium text-[#a4a4a4]">
                Don&apos;t have an account?{" "}
              </span>
              <Button
                variant="link"
                className="font-medium text-[#7a77ff] p-0 h-auto text-[13px]"
              >
                Create one
              </Button>
            </p>
          </div>
        </Card>
      </main>

      <Tabs
        defaultValue="login"
        className="flex flex-col w-[328px] h-[58px] items-start gap-2.5 p-1.5 absolute top-[149px] left-[calc(50.00%_-_164px)] bg-[#ebebeb] rounded-[31px]"
      >
        <TabsList className="inline-flex items-center gap-1 relative flex-[0_0_auto] bg-transparent p-0 h-auto">
          <TabsTrigger
            value="login"
            className="flex w-[153px] h-[46px] items-center justify-center gap-2.5 px-[38px] py-[7px] relative bg-[#f1ba6d] rounded-[32px] data-[state=active]:bg-[#f1ba6d] data-[state=inactive]:bg-[#ebebeb]"
          >
            <span className="w-fit [font-family:'Lexend',Helvetica] font-semibold text-black text-base leading-[24.3px] whitespace-nowrap relative tracking-[0]">
              Login
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="register"
            className="flex w-[153px] h-[46px] items-center justify-center gap-2.5 px-[38px] py-[7px] relative bg-[#ebebeb] rounded-[32px] data-[state=active]:bg-[#f1ba6d] data-[state=inactive]:bg-[#ebebeb]"
          >
            <span className="relative w-fit [font-family:'Lexend',Helvetica] font-semibold text-black text-base tracking-[0] leading-[24.3px] whitespace-nowrap">
              Register
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
