
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  items: {
    label: string;
    link?: string;
  }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-3 px-4 md:px-8 text-sm">
        <nav className="flex">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            if (isLast) {
              return <span key={index} className="font-medium">{item.label}</span>;
            }
            
            return (
              <React.Fragment key={index}>
                {item.link ? (
                  <Link to={item.link} className="text-gray-500 hover:text-black">{item.label}</Link>
                ) : (
                  <span className="text-gray-500">{item.label}</span>
                )}
                <span className="mx-2 text-gray-500">/</span>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
