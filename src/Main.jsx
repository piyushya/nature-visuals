import Fact from "./Fact"
import bubble_ring from "./assets/bubble_ring.jpg"
import bird from "./assets/bird.jpg"
import water from "./assets/deep_water.jpg"
import mango from "./assets/mango_worm.jpg"
import ant from "./assets/ant.jpg"

export default function Main(){
    return(
        <section className="facts-container">
            <Fact 
                text="Footage of two colliding Bubble Rings in the ocean" 
                image={bubble_ring} 
                link="https://www.instagram.com/reel/CrL5SyNPmtq/?utm_source=ig_web_copy_link"
            />
            <Fact 
                text="A red tailed hawk stabilising its head to focus on its prey
             as it hovers in gusting winds" 
                image= {bird}
                link="https://www.instagram.com/reel/CrT2PdRso54/?utm_source=ig_web_copy_link"
            />
            <Fact 
                text="Leptogenys ants self assembling into a daisy chain to transport a millipede home" 
                image={ant} 
                link="https://www.instagram.com/reel/CrOr1AgPvVj/?utm_source=ig_web_button_share_sheet"
            />
            <Fact 
                text="A look into how deep a seemingly shallow Glacial body of water can be" 
                image={water}
                link="https://www.instagram.com/reel/CrJWt0DrN7I/?utm_source=ig_web_copy_link"
            />
            <Fact 
                text="The common baron caterpillar on a mango leaf, The yellow/white spine on its back perfectly aligned in colour and width with the midrib vein of the leaf from the plant on which it live." 
                image={mango}
                link="https://www.instagram.com/reel/Cq_BarPtC-9/?utm_source=ig_web_copy_link"
            />
        </section>
    )
}