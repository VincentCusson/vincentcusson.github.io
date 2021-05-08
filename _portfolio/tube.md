---
title: "Etu{d,b}e"
excerpt: "Performance setup in collaboration with Tommy Davis and autonomous musical agents. <br/><img src='/images/tube.jpeg'>"
collection: portfolio
---
In collaboration with Tommy Davis, we propose improvised performances including autonomous musical agents and live instrumentists. We are using a combination of three frameworks from different composer-programmers. These agents’ behaviour is directed by various machine listening functions which may be summarized as: follow my step and follow that way<a href="#nika2017">[1]</a>. We are designing a modular environment to test several performative environments, explore contrasting human-machine groupings, and develop various machine listening and agency functions. We consider this exploration as a type of étude. As in the traditional use of the term in music pedagogy, our improvisations are presenting situations where the human and it's digital counterpart are studying (étudier) each other in realtime. The autonomous musical agents can even *learn* over the course of multiple performances by creating an offline memory bank. We'll assess whether this could improve the perceived quality of the human-machine interaction in this context.
<br>

### Performing DYCI2 for the North American Saxophone Alliance virtual conference

<div class="container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oUbeL_lAhFU" title="DYCI2 improvisation" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="overlay">
        <p style="font-size:60%;">Credits: Marie-Chantal Leclair, Tommy Davis, and Vincent Cusson</p>
    </div>
</div>

### Adapting Existing Framework
We are adapting these three existing autonomous environments to our specific performance situation:
* **DYCI2** by [Jérôme Nika](https://jeromenika.com/) (France)
* **_derivations** by [Ben Carey](https://bencarey.net/) (Australia)
* **CTIP2** by [Sergio Kafejian](https://musicabrasilis.com/composers/sergio-kafejian) (Brazil)

From simple pitch detection categorization to more complex live musical learning, the different improvisation environments offer autonomous capabilities in their own way. Two of them include audio effects that are modified either via agent input or manually. We already started customizing CTIP2 and DYCI2 for our needs by adding or refining graphical user inetrrface (GUI) features. We want to play with these tools and explore their minute functions and details; amazing things can occur when testing the limits of such systems. We are collaborating with each composer-programmer and have their permission to modify and perform the patches. 

### Interaction and collaboration
Currently, the real-time control over the multiple parameters of an agent is somewhat limited. 
It is possible to interact with the system via [Max/MSP](https://cycling74.com/products/max)'s GUI and with a typical computer input interfaces like the keyboard, the mouse, or a MIDI controller. It is often the role of a dedicated performer playing the electronics. However, we argue that an instrumentist should be able to control directly some parameters to enable more intricate interaction with a musical agent.

It has been shown that two-way communication between a musician and the machine helps reach the state of flow.[article][flow] Multimodal feedback should be design to inform the instrumentist about the patch state during an improvisation. In addition to the obvious sonic output from the agent, our first iteration will integrate visual indicators via a screen. Attempting to ease the performers cognitive load [magnusson], all parameters cannot be shown at the same time. Further research would involve experimenting with haptic feedback[hapticKeys] as another communication channel. In any case, we'll have to build the system gradually to allow for more complex collaborative scenarios over time. 

[mapping]

---
<br>
Towards this goal, we will develop a digital interface fixed onto an instrument, which will send data to the patch for further processing. The design of similar digital musical instruments (DMI) and various forms of meta- or augmented-instrument is not new and our work is inspired by colleagues at IDMIL [EDU] [JOHNNY] and elsewhere [andrewMcPherson].

In addition to traditional instruments, we will work with an unusual one: The Tube. It is a 2 meters long flexible plastic tube with a saxophone mouthpiece attached at one end. The inspiration comes from the concept of *infra-instrument* described as "restricted in its expressivity, broken or only a portion of a standard instrument"[Bowers]. This allows the performer to maintain a certain level of control over the sound production, articulations, and dynamics developed from years of musical training. The cylindrical tube reacts differently than the saxophone body producing inharmonic sounds, overtones, and rich textures. 
Tommy has improvised with tubes in collaborative performances with Wild Space Dance in Brooklyn (2015), Ensemble AKA for No Hay Banda (2017), and with Duo d’Entre-Deux for the co-improvised Reverberant House (2019) produced by Codes d’accès.
[imageTube] or [videoTube]

The simplicity of it's design is appealing for us since it offers more liberty - as in less physical constraints [magnusson] - for augmentating it with electronics. We are now faced with this interesting questions; what happens when you *augment* an *infra* instrument..?

For our first prototype, we plan to model and 3D print the body of the controller. It'll have to be fixed to the accoustic instrument without hindrance to the performer. An emphasis will be put on the instrumentist preferences regarding some inherent qualities of sensors used for bi-manual interactions. The use of human-centered design strategies as been proved to be an efficient way to facilitate the learningship of a new digital instrument [johnny]. Custom electronics based around the esp8266 (WIFI enabled Arduino-like boards) will be interfacing the sensors and actuators to relay information between the musician and the musical agent. [image3Dmodel]



The inspiration for this project stemmed from a collaboration for Tommy’s DMus recital performance planned for May 2021. The project represents each collaborators expertise and interests equally. Vincent brings his skills as programmer, instrument builder, and interface designer. Tommy will contribute his proficiency as improviser, performer of electronic and interactive music, and co-designer of the improvising modules.


## References

<a style="color:grey" name="nika2017">Nika, J., Déguernel, K., Chemla–Romeu-Santos, A., Vincent, E., & Assayag, G. (2017, October). DYCI2 Agents: Merging the ”free”, ”reactive”, and ”scenario-Based” Music Generation Paradigms. International Computer Music Conference.</a>