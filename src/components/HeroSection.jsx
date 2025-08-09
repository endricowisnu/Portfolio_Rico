import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span> 
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Endrico</span> 
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Wisnu</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-3"> Wardhana</span>
                    </h1>
                    <p className="text-large md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I create a stellar web experiences with modern technologies for showing my portfolio.
                        Specializing in front-end mobile development especially, I wish i could
                        build some interfaces that are beautiful and functional
                    </p>
                    
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-[hsl(var(--primary))]"/>
                </div>
            </div>

        </section>
    )
}