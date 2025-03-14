
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-white">
          Ready to transform your space with unique artwork?
        </h2>
        <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
          Whether you're looking for an existing piece or want to commission something special,
          I'm here to help bring your vision to life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-indigo-700"
          >
            Explore Gallery
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-indigo-700"
          >
            Request Commission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
