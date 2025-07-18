import { ReactNode } from "react";
import Footer from "@/components/Footer";


interface BaseTemplateProps {
  children: ReactNode;
  className?: string;
}

const BaseTemplate = ({ children, className = "" }: BaseTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background pb-5 mt-0">
      {/* <Navigation /> */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default BaseTemplate;