import { BriefcaseBusiness, Code, Smartphone, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-[hsl(var(--primary))]">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-extrabold">Passionate in technologies</h3>
                        <p className="text-justify">
                            A freshgraduate student from UPN "veteran" Yogyakarta that focus on building web and android platform, 
                            I specialize in creating responsive, accessible, and performant applications using modern technologies
                        </p>

                        <p className="text-justify">
                            I'm Passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and techniques
                            to stay at the forefront of the ever-evolving technologies
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
                            <a href="#contact" className="cosmic-button bg-primary">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary hover:bg-primary transition-colors duration-300 ">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Still figuring out how to creating websites and web applications
                                        that responsive and functional with modern framworks such as react
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Smartphone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Android Development</h4>
                                    <p className="text-muted-foreground">
                                        Able to creating android native application using kotlin with
                                        modern toolkit such as Jetpack Compose
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    )
}