import { navbarLinks } from "@/_utils/links";
import Typography from "../Atoms/Typography";
import Link from "next/link";

function NavbarLinks() {
    return (
        <div className="flex gap-3 capitalize items-center">
            {navbarLinks.map((link) => (
                <div key={link.label}>
                    <Link
                        href={link.href}
                        target={link.target}
                        className="flex gap-3 items-center group"
                        prefetch
                    >
                        <Typography
                            className="text-foreground group-hover:text-primary transition-colors max-md:text-[14px]!"
                            size="lg"
                            weight="semibold"
                        >
                            {link.label}
                        </Typography>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NavbarLinks;
