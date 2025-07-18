import { ReactNode } from "react";
import BaseTemplate from "./BaseTemplate";

interface PageTemplateProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const PageTemplate = ({ 
  title, 
  subtitle, 
  children, 
  className = "",
  centered = false 
}: PageTemplateProps) => {
  const containerClasses = centered 
    ? "flex items-center justify-center" 
    : "container mx-auto px-4 py-8";

  return (
    <BaseTemplate className={containerClasses}>
      <div className={`w-full ${className}`}>
        {title && (
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </BaseTemplate>
  );
};

export default PageTemplate;