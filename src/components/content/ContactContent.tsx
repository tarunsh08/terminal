"use client";

import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const ContactContent = () => (
  <div className="space-y-8 px-4 sm:px-6 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Left Section - Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 sm:mb-4 text-center md:text-left">
            Let's Connect
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-center md:text-left">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and development.  
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <ContactItem
            icon={<Mail className="w-6 h-6 text-cyan-400" />}
            label="Email"
            value="tarunsharma08.com@gmail.com"
            href="mailto:tarunsharma08.com@gmail.com"
          />
          <ContactItem
            icon={<Github className="w-6 h-6 text-green-400" />}
            label="GitHub"
            value="github.com/tarunsh08"
            href="https://github.com/tarunsh08"
          />
          <ContactItem
            icon={<Linkedin className="w-6 h-6 text-blue-400" />}
            label="LinkedIn"
            value="linkedin.com/in/tarun-sharma"
            href="https://linkedin.com/in/tarun-sharma-a0a5552b4"
          />
          <ContactItem
            icon={<Twitter className="w-6 h-6 text-sky-400" />}
            label="X"
            value="@TarunSharm202"
            href="https://x.com/TarunSharm202"
          />
          <ContactItem
            icon={<MapPin className="w-6 h-6 text-purple-400" />}
            label="Location"
            value="Uttar Pradesh, India"
          />
        </div>
      </div>

      {/* Right Section - Message Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 flex flex-col justify-center text-center">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
          Let’s Collaborate
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
          Have a project in mind or want to work together?  
          Reach out through any platform — I usually respond within 24 hours.
        </p>
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium mx-auto text-sm sm:text-base"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send an Email
        </a>
      </div>
    </div>

    {/* Additional Info */}
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-5 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
        <InfoBox color="text-cyan-400" title="24h" subtitle="Response Time" />
        <InfoBox color="text-green-400" title="Open" subtitle="For Opportunities" />
        <InfoBox color="text-purple-400" title="Remote" subtitle="Work Available" />
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center space-y-4">
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed px-2">
        Prefer a more direct approach? Feel free to email me directly at{" "}
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="text-cyan-400 hover:underline break-words"
        >
          tarunsharma08.com@gmail.com
        </a>
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm sm:text-base"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Email
        </a>
        <a
          href="https://linkedin.com/in/tarun-sharma-a0a5552b4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-lg transition-colors text-sm sm:text-base"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </div>
);

const ContactItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-start sm:items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-500 transition-colors group flex-col sm:flex-row text-center sm:text-left">
      <div className="mb-2 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start w-full sm:w-auto">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-slate-400">{label}</div>
        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors break-words">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors hidden sm:block" />
      )}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const InfoBox = ({
  color,
  title,
  subtitle,
}: {
  color: string;
  title: string;
  subtitle: string;
}) => (
  <div>
    <div className={`${color} text-xl sm:text-2xl font-bold mb-1 sm:mb-2`}>
      {title}
    </div>
    <div className="text-slate-300 text-xs sm:text-sm">{subtitle}</div>
  </div>
);
