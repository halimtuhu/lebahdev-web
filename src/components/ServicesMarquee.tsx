const ServicesMarquee = () => {
  return (
    <div className="relative m-auto flex gap-28 overflow-hidden border border-default-200 py-6">
      <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            UI-UX Experience
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            Static Web Page
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            Web Application
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            SEO Optimization
          </h2>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
      >
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            UI-UX Experience
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            Static Web Page
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            Web Application
          </h2>
        </div>
        <div className="py-2">
          <h2 className="text-4xl font-medium text-default-950">
            SEO Optimization
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;
