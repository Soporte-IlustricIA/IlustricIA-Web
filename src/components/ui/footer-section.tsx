'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Páginas',
		links: [
			{ title: 'Nuestros Servicios', href: '#dashboard' },
			{ title: 'Quienes Somos', href: '#about' },
			{ title: 'FAQs', href: '#faqs' },
			{ title: 'Recursos', href: '#recursos' },
		],
	},
	{
		label: 'Redes Sociales',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-neutral-200 dark:border-neutral-800 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.black/5%),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16 mt-32">
			<div className="bg-black/10 dark:bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4 md:pl-32">
					<div className="flex items-center gap-2">
						<img 
							src="/images/logo.png" 
							alt="IlustricIA Logo" 
							className="size-40 object-contain transition-all duration-300"
							referrerPolicy="no-referrer"
						/>
					</div>
					<p className="text-neutral-600 dark:text-neutral-400 mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} IlustricIA. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-medium text-black dark:text-white uppercase tracking-wider">{section.label}</h3>
								<ul className="text-neutral-600 dark:text-neutral-400 mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-black dark:hover:text-white inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
    key?: React.Key;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
