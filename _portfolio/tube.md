---
title: "Etu{d,b}e"
excerpt: "Performance setup in collaboration with Tommy Davis and autonomous musical agents. <br/><img src='/images/tube.jpeg'>"
collection: portfolio
---
In collaboration with Tommy Davis, we propose improvised performances including autonomous musical agents and live instrumentists. We are using a combination of three frameworks from different composer-programmers. These agents’ behaviour is directed by various machine listening functions which may be summarized as: follow my step and follow that way. We are designing a modular environment to test various performative environments, explore contrasting human-machine groupings, and develop various machine listening and agency functions. We consider this exploration as a type of étude. As in the traditional use of the term in music pedagogy, our improvisations are presenting situations where the human and it's digital counterpart are studying (étudier) each other in realtime. The autonomous musical agents can even *learn* over the course of multiple performances by creating an offline memory bank. We'll assess whether this could improve the perceived quality of the human-machine interaction in this context.
<br>

### Performing DYCI2 framework during the North American Saxophone Alliance virtual conference

<div class="container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oUbeL_lAhFU" title="DYCI2 improvisation" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="overlay">
        <p style="font-size:80%;">Credits: Marie-Chantal Leclair, Tommy Davis, and Vincent Cusson</p>
    </div>
</div>

### Adapting Existing Framework
We are adapting these three existing autonomous environments to our specific performance situation:
* **DYCI2** by [Jérôme Nika](https://jeromenika.com/) (France)
* **_derivations** by [Ben Carey](https://bencarey.net/) (Australia)
* **CTIP2** by [Sergio Kafejian](https://musicabrasilis.com/composers/sergio-kafejian) (Brazil)

From simple pitch detection categorization to more complex live musical learning, the different improvisation environments offer autonomous capabilities in their own way. Two of them include audio effects that are modified either via agent input or manually. We already started customizing CTIP2 and DYCI2 for our explorations by adding or refining UI features to allow a better communication between a musician and it’s digital counterpart. We want to play with these tools and explore their minute functions and details; amazing things can occur when testing the limits of such systems. We are collaborating with each composer-programmer and have their permission to modify and perform the Max/MSP patches for this project. 

### Interaction and collaboration
Currently, the real-time control over the multiple parameters of an agent is somewhat limited. 
It is possible to interact with the system via Max/MSP's graphical interface and with a typical computer input interfaces like the keyboard, the mouse, or a MIDI controller. It is often the role of a dedicated performer playing the electronics. However, we argue that an instrumentist should be able to control directly some parameters to enable more intricate interaction with a musical agent.

and multimodal feedback related to the status and controls of the patch via visual indicators (screen or LED), to inform the instrumentist about the patch during an improvisation.
more complex scenarios. We will explore uncommon inputs and multimodal feedback later in the process and based on our initial tests.


### The Atube

Towards this goal, we will develop a digital interface fixed onto an instrument, which will send data to the patch for further processing. The design of similar digital musical instruments (DMI) and various forms of meta- or augmented-instrument is not new and our work is directly inspired by the work done by researchers at IDMIL [EDU] [JOHNNY] and elsewhere.[andrewMcPherson]

In addition to traditional instruments, we will work with an unusual one: The Tube. It is a 2 meters long flexible plastic tube with a saxophone mouthpiece attached at one end. The inspiration comes from the concept of *infra-instrument* described as "restricted in its expressivity, broken or only a portion of a standard instrument"[Bowers]. This allows the performer to maintain a certain level of control over the sound production, articulations, and dynamics developed from years of musical training. The cylindrical tube reacts differently than the saxophone body producing inharmonic sounds, overtones, and rich textures. 
Tommy has improvised with tubes in collaborative performances with Wild Space Dance in Brooklyn (2015), Ensemble AKA for No Hay Banda (2017), and with Duo d’Entre-Deux for the co-improvised Reverberant House (2019) performance produced by Codes d’accès.
[imageTube] or [videoTube]

The simplicity of the design is appealing for our purposes since it offers more liberty (as in less constraints) for augmentation with electronics. We are now faced with this interesting questions; what happens when you *augment* an *infra* instrument..?



For our first prototype, we envision to model and 3D print the body of the controller. This would offer flexibility in terms of design and ease the development process. Custom electronics based around the esp8266 (WIFI enabled Arduino-like boards), or similar plateforme, will be embedded in the model. 
[imageESP8266]



The inspiration for this project stemmed from a collaboration for Tommy’s DMus recital performance planned for May 2021. The project represents each collaborators expertise and interests equally. Vincent brings his skills as programmer, instrument builder, and interface designer. Tommy will contribute his proficiency as improviser, performer of electronic and interactive music, and co-designer of the improvising modules.

