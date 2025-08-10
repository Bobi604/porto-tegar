export const Cv = () => {
  return (
    <section id="cv" className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Education and Skills */}
        <div>
          {/* Education */}
          <h2 className="text-2xl font-bold text-blue-400 mb-4">EDUCATION</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold">
                INSTITUT BISNIS DAN TEKNOLOGI INDONESIA
              </p>
              <p> TI-Desain Grafis Multimedia</p>
              <p className="text-sm text-gray-500">
                2021 – Present
              </p>
            </div>
            <div>
              <p className="font-semibold">
                IC3 Digital Literacy Certificate
              </p>
              <p>Certiport</p>
              <p className="text-sm text-gray-500">
                2024 | Certificate ID: SkDk-uS8E
              </p>
            </div>
            <div>
              <p className="font-semibold">Adobe Certified Professional</p>
              <p>Visual Design using Adobe Photoshop</p>
              <p className="text-sm text-gray-500">
                2024 | Certificate ID: wbqw6-H9y6
              </p>
            </div>
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-4">SKILL</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Pr</span>
              <span>Premiere</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Ps</span>
              <span>Photoshop</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Ai</span>
              <span>Illustrator</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Lr</span>
              <span>Lightroom</span>
            </div>
            
            
          </div>
        </div>

        {/* Work Experiences */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            WORK EXPERIENCES
          </h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <p className="font-semibold">PT.Kakul Event Production</p>
              <p>Operator Event  & Graphic Design </p>
              <p className="text-sm text-gray-500">
                09/2024 – 03/2025 | 6 month
              </p>
              <p className="mt-1 text-sm">
                Built the platform from the ground up, including content
                Handled graphic design and event operations, ensuring visual concepts and event execution met company standards.
              </p>
              <a
                href="https://ictgo.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
              
              </a>
            </div>
            <div>
              <p className="font-semibold">PT.Vegas Viva Ventury</p>
              <p>Social Media & Graphic Design</p>
              <p className="text-sm text-gray-500">
                07/2022 – 01/2023 | 6 month
              </p>
              <p className="mt-1 text-sm">
                Managed social media content and created graphic designs to support brand visibility and marketing campaigns.
              </p>
            </div>
            <div>
              <p className="font-semibold">Freelance Fotographer & Videographer</p>
              <p></p>
              <p className="text-sm text-gray-500">
                08/2021 – Present
              </p>
              <p className="mt-1 text-sm">
                Capture and edit photos and videos to meet client concepts and requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
