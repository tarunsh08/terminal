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
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <p className="text-slate-300 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development. Feel free to 
            reach out through any of the platforms below.
          </p>
        </div>

        <div className="space-y-4">
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

      {/* Right Side: Instead of Form — clean card with info */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col justify-center text-center">
        <h3 className="text-xl font-bold text-white mb-4">Let’s Collaborate</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          Have a project in mind or want to work together?  
          Reach out through any platform — I usually respond within 24 hours.
        </p>
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium mx-auto"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send an Email
        </a>
      </div>
    </div>

    {/* Additional Info */}
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <InfoBox color="text-cyan-400" title="24h" subtitle="Response Time" />
        <InfoBox color="text-green-400" title="Open" subtitle="For Opportunities" />
        <InfoBox color="text-purple-400" title="Remote" subtitle="Work Available" />
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center">
      <p className="text-slate-300 mb-4">
        Prefer a more direct approach? Feel free to email me directly at{" "}
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="text-cyan-400 hover:underline"
        >
          tarunsharma08.com@gmail.com
        </a>
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="mailto:tarunsharma08.com@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Email
        </a>
        <a
          href="https://linkedin.com/in/tarun-sharma-a0a5552b4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-lg transition-colors"
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
    <div className="flex items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-500 transition-colors group">
      <div className="mr-4">{icon}</div>
      <div className="flex-1">
        <div className="text-sm text-slate-400">{label}</div>
        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
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
    <div className={`${color} text-2xl font-bold mb-2`}>{title}</div>
    <div className="text-slate-300 text-sm">{subtitle}</div>
  </div>
);
