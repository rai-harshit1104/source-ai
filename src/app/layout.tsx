
import './globals.css'
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/Toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: 'SourceAI',
  description: 'Your AI-powered development companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log
  return (
    <html lang="en">
      <body>
        <div id='root'>
        <TooltipProvider>
          <Toaster />
          <Navigation />
          {children}
        </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
