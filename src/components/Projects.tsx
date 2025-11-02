import Image from 'next/image';

export default function Projects() {
	const projects = [
		{
			image: '/figma.png',
			alt: 'figma project',
			title: 'Time Wise',
			description:
				'TimeWise adalah aplikasi manajemen waktu yang membantu pengguna dalam mengatur jadwal harian, menetapkan prioritas tugas, dan melacak produktivitas secara efisien. Aplikasi ini dirancang dengan antarmuka yang sederhana namun intuitif, sehingga pengguna dapat mengatur waktu belajar, bekerja, dan beristirahat dengan seimbang.',
			tags: ['Productivity', 'Time Management', 'Next.js'],
		},
		{
			image: '/perpus.jpg',
			alt: 'library system app',
			title: 'Sistem Informasi Perustakaan',
			description:
				'Sistem Informasi Perpustakaan adalah aplikasi berbasis web yang dirancang untuk mempermudah pengelolaan data buku, anggota, dan transaksi peminjaman. Sistem ini memungkinkan admin untuk melakukan proses CRUD (Create, Read, Update, Delete) data secara efisien serta menghasilkan laporan peminjaman dengan cepat. Dikembangkan menggunakan PHP, MySQL, dan Bootstrap, proyek ini bertujuan meningkatkan efisiensi pengelolaan perpustakaan sekaligus memberikan tampilan antarmuka yang ramah pengguna dan responsif.',
			tags: ['web', 'PHP', 'MySQL', 'Bootstrap'],
		},
			{
			image: '/Laravel.png',
			alt: 'Laravel Project',
			title: 'Data Mahasiswa',
			description:
				'Aplikasi ini merupakan sistem berbasis web yang dikembangkan menggunakan Laravel Framework dengan tujuan untuk mengelola data mahasiswa secara efisien dan terstruktur.',
			tags: ['Laravel'],
		},
	];

	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
				projects
			</h3>

			{/* Loop semua project */}
			{projects.map((project, index) => (
				<div
					key={index}
					className="flex flex-col md:flex-row gap-x-6 gap-y-2"
				>
					<Image
						alt={project.alt}
						src={project.image}
						className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
						width={800}
						height={500}
					/>

					<div className="w-full">
						<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
							{project.title}
						</h4>
						<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
							{project.description}
						</p>

						<div className="flex items-center flex-wrap gap-x-2.5 mt-2">
							{project.tags.map((tag, tagIndex) => (
								<span
									key={tagIndex}
									className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
