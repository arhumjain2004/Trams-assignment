function Footer() {
  return (
    <footer className="bg-[#dcead9] px-6 pb-10">

      <div className="max-w-7xl mx-auto">

        <hr className="border-gray-400 mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h4 className="font-medium mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-xs text-gray-600">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Terms & Policies
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Follow Us
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>1458W Fulton St</li>
              <li>California, USA</li>
              <li>+1 234 567 890</li>
              <li>info@elementum.com</li>
            </ul>
          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-20">
          ©2023 Elementum. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;