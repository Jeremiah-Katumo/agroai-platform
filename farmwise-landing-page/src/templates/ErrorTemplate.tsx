import { ReactNode } from "react";
import { Link } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";
import { Button } from "@/components/ui/button";

interface ErrorTemplateProps {
  errorCode?: string;
  title: string;
  message: string;
  children?: ReactNode;
  showHomeButton?: boolean;
}

const ErrorTemplate = ({ 
  errorCode, 
  title, 
  message, 
  children,
  showHomeButton = true 
}: ErrorTemplateProps) => {
  return (
    <BaseTemplate className="flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {errorCode && (
          <h1 className="text-6xl font-bold text-muted-foreground mb-4">
            {errorCode}
          </h1>
        )}
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6">
          {message}
        </p>
        {children}
        {showHomeButton && (
          <Button asChild>
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        )}
      </div>
    </BaseTemplate>
  );
};

export default ErrorTemplate;