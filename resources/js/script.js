const pageContents = {
"home": `
<h1>Hi, I'm Chris!</h1>
<p>Thanks for checking out my portfolio!</p>
<p>I'm a fourth-year Mechanical and Mechatronic Engineering student with a passion for programming and 3D printing.</p>
<p>Below are some projects I've worked on:</p>
<div class="card p-2">
    <div class="row">
        <div class="col-md-4">
            <h2>Osteotomy PSI</h2>
            <p>I designed a surgical guide for an osteotomy (a surgery where bone is cut and realigned). This precise 3D-printed object mounts onto the surface of a bone in surgery, helping to guide the surgeons' drills and saws. I also designed a plate to secure the realigned bone so it can heal safely and steadily.</p>
        </div>
        <div class="col-md-4">
            <h3>Skills Used</h3>
            <ul>
                <li>X-Ray Analysis</li>
                <li>CT Scan Segmentation (Horos)</li>
                <li>CAD (Blender)</li>
                <li>3D Printing</li>
            </ul>
        </div>
        <div class="floaty-card col-md-4">
            <a onclick="goToPage('osteotomy-psi')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/osteotomy-psi/osteotomy_banner.png" class="img-fluid icon-img" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">Click for more info</p>
            </a>
        </div>
    </div>
</div>
`,



"osteotomy-psi": `
<style>
    .img {
        border-radius: 15px; 
    }
</style>
<h1>Osteotomy PSI</h1>
<p>Design Challenge for Personalised Surgery</p>
<h2>Summary</h2>
<p>I designed a surgical guide for an osteotomy (a surgery where bone is cut and realigned). This precise 3D-printed object mounts onto the surface of a bone in surgery, helping to guide the surgeons' drills and saws. I also designed a plate to secure the realigned bone so it can heal safely and steadily.</p>
<h2>Skills Used</h2>
<ul>
    <li>X-Ray Analysis</li>
    <li>CT Scan Segmentation (Horos)</li>
    <li>CAD (Blender)</li>
    <li>3D Printing</li>
</ul>

<h2>Context</h2>
<p>A misalignment in the structure of the bones in the legs can result in pain and mobility issues. A common example of this is osteoarthritis in the knee. When the weight the leg bears is not distributed evenly across the joint, the meniscus and cartilage on one side can wear down. The exposed bone generates pain and mobility issues in the knees.</p>
<p>A solution to prevent leg bone structure misalignment is a lower-limb corrective osteotomy. By cutting into the femur or tibia, surgeons can realign the bone so that the patient's body weight is evenly distributed across their joints when standing. This surgery requires great precision as overcorrections, undercorrections, or erroneous cuts can exacerbate problems in the patient's leg. </p>
<p>Patient-specific instruments (PSI's) are custom-designed to suit the patient, facilitating  successful surgical and recovery outcomes. A PSI guide can greatly contribute to the success and speed of an osteotomy, and a PSI plate can allow the surgical site to heal well. In this project, I underwent a procedure to design PSI's for a fictional surgery.</p>

<p></p>
<div class="row">
    <div class="col-md-10">
        <h2>X-Ray Analysis</h2>
        <p>The PSI designing process begins by deciding if the patient requires surgery and, if so, what type of surgery is best. These decisions are informed by a coronal alignment analysis on an x-ray image.</p>
        <p>Mechanical axes and contact planes are drawn over the leg bones. Measurements are taken on these drawn features and compared to what is considered the healthy range. The two most important measurements are the hip-knee-ankle angle (which measures how much the legs bow inwards or outwards) and the weight-bearing line percentage (which quantifies the unevenness of weight distribution on the patient's knee). The measurements determined that the left leg has normal measurements, but the right leg bows inwards (known as a valgus deformity) with a significantly uneven weight distribution on the knee.</p>
    </div>
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/measurements.png" class="img-fluid page-img" style="aspect-ratio: 0.5;" alt="...">
        <p style="text-align: center;">Mechanical Axes of Legs</p>
    </div>
</div>
<div class="row">
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/miniaci.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Wedge Angle with Miniaci Method</p>
    </div>
    <div class="col-md-10">
        <p>To combat this, the bone can undergo either a closing-wedge surgery on the inner leg (medial side) or opening-wedge on the outer leg (lateral side). I chose the closing-wedge surgery because it doesn't need a bone graft, it heals quickly, is more stable, more predictable, and easier to access in surgery while avoiding nerves, muscle, tendons, blood vessels and cartilage. This surgery can be conducted on the upper tibia or lower femur. I chose the upper tibia because it is easier to access, and the measurements I conducted suggests that the leg deformity partially originates from the tibia.</p>
        <p>I found the suitable correction angle for the wedge using the Miniaci method, a reliable geometric heuristic. I plan the wedge to not cut entirely through the bone, so a thin bridge of bone can help stabilise the site during surgery and healing. I placed the hinge point ~15 mm below the top of the tibia and ~7.5 mm inwards from the lateral side of the bone. I calculated the correction angle to be ~7&deg.</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-10">
        <h2>CT Scan Segmentation</h2>
        <p>To design the suitable PSI's, I first needed a 3D model of the section of the bone where the surgery was planned to happen. The patient has a CT scan which contains detailed data of their skeleton, organs and flesh. Using software like Horos (what I used) or 3D Slicer, these different body structures can be segmented (separated into distinct volumes). With the bones of the patient's right knee segmented, the software can then turn the desired volume into a 3D mesh, a suitable file type for planning the surgery and designing the PSI's.</p>
    </div>
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/segment.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">CT Scan Segmented Bone</p>
    </div>
</div>

<p></p>

<h2>Surgical Simulation</h2>
<p>To simulate the surgery on the bone, I used Blender as it is a very powerful and competent software for manipulating 3D meshes.</p>
<div class="row">
    <div class="col-md-3">
        <img src="pages/osteotomy-psi/before_surgery.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Before Surgery</p>
    </div>
    <div class="col-md-3">
        <img src="pages/osteotomy-psi/wedge_cut.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Wedge Cut</p>
    </div>
    <div class="col-md-3">
        <img src="pages/osteotomy-psi/overlay.gif" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Comparison with X-Ray</p>
    </div>
    <div class="col-md-3">
        <img src="pages/osteotomy-psi/realigned.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Bone Realigned</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-8">
        <h2>Plate Design</h2>
        <p>This is my design for the implant plate to hold the osteotomised bone together. It conforms to the shape of the tibia, and is fixed in place with screws. The screw holes are spaced apart and account for redundant screws, increasing rigidity. The size of the implant is compact to be as non-intrusive as possible while still being rigid. The implant is chosen to be constructed out of titanium as it is non-toxic and durable. However, my future considerations include using bioabsorbable polymers for the plate and screws so they don't have to be removed through surgery.</p>
    </div>
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/plate_model.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Plate Blender Model</p>
    </div>
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/plate3D.jpg" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Plate 3D-Printed Model</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/guide_model.png" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Guide Blender Model</p>
    </div>
    <div class="col-md-2">
        <img src="pages/osteotomy-psi/guide3D.jpg" class="img-fluid page-img" style="aspect-ratio: 1;" alt="...">
        <p style="text-align: center;">Guide 3D-Printed Model</p>
    </div>
    <div class="col-md-8">
        <h2>Surgical Guide Design</h2>
        <p>This is my design for the surgical guide. Like the implant plate, it conforms to the shape of the tibia. There are guide holes to secure the piece in place with screws, and to pre-drill screw holes. There are guide notches to precisely align the saw when making the upper and lower wedge cuts. It is made of titanium, a standard material for PSI's due to its non-toxicity and durability during cutting.</p>
    </div>
</div>

<p></p>

<h2>References</h2>
<div style="padding-left: 3em; text-indent: -3em;">
<p>Jung, S.-H., Jung, M., Chung, K., Moon, H.-S., Jang, H., Choi, C.-H., & Kim, S.-H. (2025). Achieving Sufficient Valgus Alignment is Essential to Ensure Low Residual Pain in Short- to Midterm Follow-up After High Tibial Osteotomy in KL Grade 4 Osteoarthritis Patients. <em>Orthopaedic Journal of Sports Medicine, 13</em>(5), 23259671251336782. doi:10.1177/23259671251336782</p>
<p>Khela, H. S., Khela, M. S., Sriram, V., Schroeder, G. G., Hollyer, I., & Sherman, S. L. (2025). Indications, Technique, and Outcomes of Patient Specific Instrumentation for Osteotomy About the Knee. <em>Current reviews in musculoskeletal medicine, 18</em>(11), 547-557. https://doi.org/10.1007/s12178-025-09987-2</p>
<p>Sheth, N. P., Manner, P. A., Foran, J. R. H. (2025, April). <em>Osteotomy of the Knee</em>. OrthoInfo. https://orthoinfo.aaos.org/en/treatment/osteotomy-of-the-knee/</p>
<p>Sivertsen, E. A., Vik, J., Meland, A. S. V., & Nerhus, T. K. (2023). The Dugdale planning method for high tibial osteotomies underestimates the correction angle compared to the Miniaci method. <em>Knee Surgery, Sports Traumatology, Arthroscopy, 31</em>(4), 1795. doi:10.1007/s00167-021-06663-z</p>
<p>Tabern&eacutee Heijtmeijer, S. J. C., Meesters, A. M. L., Verdonschot, N. J. J., Jutte, P. C., Doornberg, J. N., Pijpker, P. A. J., & Kraeima, J. (2025). Postoperative accuracy quantification of corrective osteotomies: standardisation of Q3D-CT methodology. <em>European Journal of Trauma and Emergency Surgery, 51</em>(1), 81. doi:10.1007/s00068-024-02684-8</p>
</div>
`,



"pliers": `
<style>
    .img {
        border-radius: 15px; 
    }
</style>

<div class="row">
    <div class="col-md-8">
        <h1>Monolithic Pliers</h1>
        <p>University Project</p>
        <h2>Summary</h2>
        <p>I designed a pair of 3D-printed pliers that are monolithic (printable in one piece with minimal post-processing). My design weighs under 20 g but can apply over 4 kg of clamping force before breaking.</p>
        <h2>Skills Used</h2>
        <ul>
            <li>CAD (Autodesk Fusion)</li>
            <li>Design for Additive Manufacturing</li>
            <li>Finite Element Analysis</li>
            <li>3D Printing</li>
        </ul>
    </div>
    <div class="col-md-4">
        <img src="pages/pliers/pliers.jpg" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Monolithic Pliers</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-2">
        <h2>Finite Element Analysis</h2>
        <p>Mechanical property simulations were used to maximise part strength whilst minimising material usage. The design experiences the most stress near the hinge so I accumulated the most material around that section. The handles and jaws received much less stress, so I reduced the mass significantly in those areas.</p>
    </div>
    <div class="col-md-2">
        <img src="pages/pliers/fea.png" class="img-fluid page-img" style="aspect-ratio: 0.5;" alt="...">
        <p style="text-align: center;">Finite Element Analysis</p>
    </div>
    <div class="col-md-3">
        <img src="pages/pliers/jaw-close.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Pliers' Jaw</p>
        <img src="pages/pliers/stress-layers.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Stress Orientation</p>
    </div>
    <div class="col-md-5">
        <h2>Strength Considerations</h2>
        <p>Many curves and fillets were used in the design. This not only aids in the ergonomics of the pliers but also allows for a more even distribution of stress, which tends to accumulate at sharp edges.</p>
        <p>The thickness of the truss beams was made to be an integer multiple of the 3d printer's wall thickness, optimising the strength and material usage in the design.</p>
        <p>The pliers were designed to be printed in an orientation such that the strength of the parts during their function would not be hindered by anisotropy. Fused deposition modelling (FDM) parts are particularly susceptible to breaking, or delamination, when they experience forces that separate the layers. The forces applied to the handles and jaws, as well as the tension inside them, will be parallel to the layers, so there will not be tension pulling the layers apart. There will be no shear forces parallel to the layers outside of the hinge, which is the thickest part of the pliers to counteract this weakness.</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-9">
        <h2>Post-Processing Considerations</h2>
        <p>No brims or rafts were necessary for the design, except for the required supports. The pliers have a large flat surface at the bottom, making extra adhesion material unnecessary. This decreases material waste, post-production time and the risk of damaging the print during post-production.</p>
        <p>The part has been designed to make minimal use of supports, containing no overhangs outside the section where the two parts meet at the hinge. The hinge itself is sealed with a 40&deg slope, an overhang that is printable without supports. This minimises waste material, post-processing time and the risk of damaging the part during post-processing.</p>
    </div>
    <div class="col-md-3">
        <img src="pages/pliers/prusa.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Pliers' Hinge in PrusaSlicer</p>
    </div>
</div>
`,


"welding-sim": `
<div class="row">
    <div class="col-md-7">
        <h1>Welding Robot Simulation</h1>
        <p>University Group Project with John Chen and Guy Smith</p>
        <h2>Summary</h2>
        <p>We designed a simulation of an automated robotic welding setup. Two 6-DOF (6 degrees of freedom) robotic arms can be programmed to manipulate heavy metal parts and apply welds to them. This system accounts for many safety features such as obstacle avoidance, singularity avoidance and emergency stopping.</p>
        <h2>Skills Used</h2>
        <ul>
            <li>CAD (SOLIDWORKS and Blender)</li>
            <li>MATLAB</li>
            <li>Programming 6-DOF Robotic Arms</li>
            <li>Linear Algebra</li>
        </ul>
    </div>
    <div class="col-md-5">
        <img src="pages/welding-sim/environment.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">System Simulation</p>
    </div>
</div>

<h2>Context</h2>
<p>Robotic and automated welding is one of the most significant and impactful developments in manufacturing technology. A fully automated welding process can prevent people from being exposed to safety risks such as burns, electrocution, blinding and the inhalation of toxic fumes. Moreover, utilising robots in the welding process can result in higher accuracy, reproducibility and speed. Utilising heavy-duty robotic arms grants manufacturers the ability to manipulate heavy parts during the welding process. </p>
<p>In this project, we have designed a system to realise the capability, precision and human safety granted by robotic welding opportunities. Our system utilises the Universal Robots UR3e as the robotic arm that manipulates the torch. The system also includes a Kuka KR1000, a heavy-duty robotic arm whose maximum payload of 1.3 T makes it highly capable of manipulating heavy pieces.</p>

<p></p>

<div class="row">
    <div class="col-md-9">
        <h2>Forward Kinematics</h2>
        <p>In the context of a robot arm, forward kinematics is the process of finding the position and rotation of the end effector (essentially the hand of the robot) given the angles of all of its joints. The system simulation includes an option to individually control each joint of each robotic arm, and forward kinematics is used to resolve the position of the end effector. </p>
        <p>These robotic arms form kinematic chains, where each joint can have its own defined reference frame relative to the one before it (almost always consisting of simple translations and rotations). A common convention to define these reference frames is Denavit–Hartenberg (DH) parameters. By defining the DH parameters of the two robot arms, forward kinematics can be achieved by propagating through the relative reference frames.</p>
        <h2>Inverse Kinematics</h2>
        <p>Inverse kinematics is the reverse process of forward kinematics, finding the joint angles for a given end effector position and rotation. One of the main functionalities of the system simulation is the ability to program paths for the end effector to follow. Inverse kinematics is used to find the joint angles at the start of the path, and sometimes at the end. However, it is not advisable to use inverse kinematics for the whole path because most calculating methods can be slow and inconsistent.</p>
    </div>
    <div class="col-md-3">
        <img src="pages/welding-sim/dh.png" class="img-fluid page-img" style="aspect-ratio: 0.85;" alt="...">
        <p style="text-align: center;">DH Parameters Diagram (Tira-Thompson, 2009)</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-4">
        <img src="pages/welding-sim/collision.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Robot Self-Collision Detection</p>
    </div>
    <div class="col-md-8">
        <h2>Path Planning</h2>
        <p>The motion of the robot arm throughout the path can be efficiently controlled with resolved motion rate control (RMRC). This technique uses the Jacobian of the robot, essentially a large matrix of derivatives that describes how the end effector position would change for a given joint angle configuration and change. By inverting the matrix, we can calculate the joint angle velocities necessary to achieve a certain end effector velocity. This is a fast and efficient way of controlling the motion of the end effector through a path, while also granting the programmer precise knowledge and control to constrain joint velocities to safe levels.</p>
        <p>There are regions within the reach of a robot where a small end effector velocity step can lead to an unruly joint jolt. These are called singularities, and can be detected by measuring the rank or determinant of the Jacobian. An amendment can be made to RMRC so that the end effector can avoid singularities. This is called Least Damped Squares (LDS) and it involves a damping factor which manipulates the inverse Jacobian to guide the end effector away from singularities.</p>
        <p>The system simulation also includes collision detection and obstacle avoidance. Regions near the robots that should not be interfered with can be placed inside an obstacle volume, which will influence the generated path outwards.</p>
    </div>
</div>


<p></p>

<div class="row">
    <div class="col-md-6">
        <h2>User Interfaces</h2>
        <p>The software simulation includes a graphical user interface which allows the user to control every joint, plan straight-line paths, and immediately stop the robot's motion with an emergency stop button. The system also supports a physical emergency stop button (implemented with a microcontroller). The user can control the robots' end effectors with a game controller. </p>
        <h2>Safety</h2>
        <p>Collision detection and avoidance is implemented so that the robots do not collide with themselves, each other, or key elements of the environment. The digital and physical emergency stop buttons ensure that the robots' operation completely and immediately ceases in the event of an emergency. The simulated environment includes safety equipment such as fire extinguishers and fencing.</p>
    </div>
    <div class="col-md-3">
        <img src="pages/welding-sim/gui.png" class="img-fluid page-img" style="aspect-ratio: 2;" alt="...">
        <p style="text-align: center;">Graphical User Interface</p>
    </div>
    <div class="col-md-3">
        <img src="pages/welding-sim/estop.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Physical E-Stop</p>
    </div>
</div>

<p></p>

<h2>References</h2>
<div style="padding-left: 3em; text-indent: -3em;">
<p>Corke, P. (2017). <em>Robotics Toolbox</em>. Peter Corke. https://petercorke.com/toolboxes/robotics-toolbox/</p>
<p>Tira-Thompson, E. (2009). <em>Illustrates the transformation parameters of a pair of reference frames laid out according to Denavit-Hartenberg convention</em> [Image]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Sample_Denavit-Hartenberg_Diagram.png</p>
</div>
`,


"hand-eye": `
<h1>Robot Hand-Eye Calibration</h1>
<p>University Group Project with John Chen, Guy Smith and Sethy Chhin</p>
<h2>Summary</h2>
<p>We implemented a hand-eye calibration system to connect the movement of a robot arm (DOBOT Magician) with the vision of a camera. By using a camera feed to direct the motion of a robot arm (a process known as visual servoing), the robot can avoid obstacles and interact with objects whose positions are not precisely known.</p>
<h2>Skills Used</h2>
<ul>
    <li>MATLAB/ROS</li>
    <li>Programming Robotic Arms</li>
    <li>Linear Algebra</li>
</ul>

<div class="row">
    <div class="col-md-10">
        <h2>System Architecture</h2>
        <p>The system can be divided into two phases: The <b>hand-eye calibration</b> phase and the <b>visual servoing</b> phase.</p>
        <p>The hand-eye calibration phase involves finding the pose data of a camera relative to some part of the robot. There are two main types of hand-eye calibration:</p>
        <ul>
            <li><b>Eye-in-hand calibration</b> involves a camera mounted to the end effector of a robot, viewing a stationarily mounted pattern. The objective is to determine the camera's pose relative to the end effector.</li>
            <li><b>Eye-to-hand calibration</b> involves a stationarily mounted camera viewing a pattern mounted on a robot's end effector. The objective is to determine the camera's pose relative to the robot's base.</li>
        </ul>
        <p>We have chosen to implement the latter type due to the ease of mounting a pattern onto the end effector rather than a camera.</p>
        <p>The hand-eye calibration phase involves three key subsystems:</p>
        <ul>
            <li>Pattern Pose Estimation</li>
            <li>Forward and Inverse Kinematics of DOBOT Magician</li>
            <li>Camera Pose Solution</li>
        </ul>
        <p>The subsystems involved in visual servoing include:</p>
        <ul>
            <li>Pattern Pose Estimation</li>
            <li>Forward and Inverse Kinematics of DOBOT Magician</li>
            <li>Pose Error Identification and Minimisation</li>
        </ul>
    </div>
    <div class="col-md-2">
        <img src="pages/hand-eye/architecture.png" class="img-fluid page-img" style="aspect-ratio: 0.35627;" alt="...">
        <p style="text-align: center;">System Flowchart</p>
    </div>
</div>

<p></p>

<div class="row">
    <div class="col-md-4">
        <img src="pages/hand-eye/points.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Point Tracking</p>
    </div>
    <div class="col-md-8">
        <h2>Pattern Identification</h2>
        <p>The team selected an 8x5 checkerboard pattern due to its simplicity, amount of recognisable features, and built-in support for camera calibration and pose estimation within MATLAB. The <code>detectCheckerboardPoints()</code> function is able to reliably identify the locations of checkerboard points, as well as the checkerboard size. This data for multiple images with the checkerboards at different positions can be used to gauge the intrinsic parameters of the camera (most importantly the focal point and image centre) using the function <code>estimateCameraParameters()</code>.</p>
        <p>Although it is reliable, the <code>detectCheckerboardPoints()</code> function is inefficient to run for a video feed. Luckily, <code>vision.PointTracker()</code> object can be utilised to efficiently track the locations of the points in a video feed. The object utilises the Kanade-Lucas-Tomasi (KLT) feature tracker algorithm. For some images that are a frame apart represented by \\(F(x,y)\\) and \\(G(x,y)\\), where these functions return the image values at the given input positions, this algorithm seeks to minimise the difference between \\(F(x+h_x,y+h_y)\\) and \\(G(x,y)\\), where \\(h_x\\) and \\(h_y\\) are the components of the displacement difference of an object in both images.</p>
        <p>With these points tracked, and the camera's intrinsic parameters gauged, we can find the coordinates of the tracked points relative to the camera, and from there determine the pose of the pattern relative to the camera. Using the pinhole model of a camera, central projection and the known distances between grid points, the <code>estimateExtrinsics()</code> function can find the pose.</p>
    </div>
</div>

<p></p>

<h2>Forward Kinematics</h2>
<p>In the context of a robot arm, the objective of forward kinematics is to identify the <b>pose</b> (translation and rotation information) of the end effector relative to the base for a given joint state (defined angles of revolute joints and translations of prismatic joints). The relative pose transform of two adjacent joints is, fortunately, able to be expressed with a single degree of freedom. The pose of the end effector relative to the base can be evaluated by chaining the relative joint transforms of each joint together. The transforms can be expressed with a minimum of 4 parameters, such as the <b>Denavit-Hartenberg (DH) parameters</b>, a sequence of rotations around and translations across the z and x axes.</p>
<h5>DH parameters of a DOBOT Magician (Gonz&aacutelez, 2023)</h5>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Joint</th>
            <th scope="col">&theta; (&deg;)</th>
            <th scope="col">d (mm)</th>
            <th scope="col">a (mm)</th>
            <th scope="col">&alpha; (&deg;)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1: Base</th>
            <td>q<sub>1</sub></td>
            <td>0</td>
            <td>0</td>
            <td>90</td>
        </tr>
        <tr>
            <th scope="row">2: Rear Arm</th>
            <td>90 + q<sub>2</sub></td>
            <td>0</td>
            <td>135</td>
            <td>0</td>
        </tr>
        <tr>
            <th scope="row">3: Forearm Mech</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <th scope="row">4: Forearm</th>
            <td>-90 + q<sub>3</sub></td>
            <td>0</td>
            <td>147</td>
            <td>0</td>
        </tr>
        <tr>
            <th scope="row">5: Wrist Mech</th>
            <td>q<sub>4</sub></td>
            <td>0</td>
            <td>59</td>
            <td>90</td>
        </tr>
    </tbody>
</table>
<p>In MATLAB, forward kinematics can be implemented through <b>Peter Corke's Robotics Toolbox</b> (Corke, 2023). The joint DH parameters can be stored in <code>Link()</code> objects, which can be concatenated into a <code>SerialLink()</code> object. The method <code>fkine()</code> can then be called on it with an input of joint angles. It outputs the transform of the end effector relative to the base.</p>

<p></p>

<h2>Inverse Kinematics</h2>
<p>Inverse kinematics is the opposite of forward kinematics, aimed at defining the joint state for a given pose. We can imagine forward kinematics as a function \\(f(q)\\) that takes a vector of joint angles \\(q\\) as its input and outputs the pose information \\(x\\) of the end effector relative to the base for the given joint angles. Inverse kinematics aims to find a solution \\(q=f^{-1}(x)\\), though there can be multiple solutions \\(q\\) for a given \\(x\\).</p> 
<p>A common way of finding \\(q\\) is through the use of iterative numerical processes such as <b>gradient descent</b> or the <b>Newton-Raphson method</b>. The former takes a starting joint state q0 and approximates a valid solution with sufficient iteration of the formula \\(q_{k+1}=q_k+J(q_k)^Te_k\\), where \\(e_k=x_{desired}-f(q_k)\\) and \\(J(q_k)\\) is the Jacobian matrix given by the formula below: 
\\[
J(\\textbf{q})=\\frac{d\\textbf{x}}{d\\textbf{q}}=\\begin{bmatrix}
\\frac{\\partial x_1}{\\partial q_1} & \\frac{\\partial x_1}{\\partial q_2} &\\cdots & \\frac{\\partial x_1}{\\partial q_n} \\\\
\\frac{\\partial x_2}{\\partial q_1} & \\frac{\\partial x_2}{\\partial q_2} &\\cdots & \\frac{\\partial x_2}{\\partial q_n} \\\\
\\vdots  & \\vdots  & \\ddots & \\vdots \\\\
\\frac{\\partial x_m}{\\partial q_1} & \\frac{\\partial x_m}{\\partial q_2} &\\cdots & \\frac{\\partial x_m}{\\partial q_n} \\\\
\\end{bmatrix}
\\] 
The Newton-Raphson method is similar but utilises the inverse of the Jacobian matrix instead of the transpose: \\(q_{k+1}=q_k+J(q_k)^{-1}e_k\\). The inverse takes more computational time, but the technique converges much faster (but with the added risk of potential diverging). It is important for the iterative process to avoid singularities and converge on a joint state that satisfies the joint state limits. </p>
<p>The Robotics Toolbox (Corke, 2023) can also be utilised to find inverse kinematics solutions for a robot by calling the <code>ikine()</code> or <code>ikcon()</code> method on a <code>SerialLink()</code> object. The method uses an SE(4) matrix describing the desired pose and outputs the approximate joint state vector required to reach the pose best.</p>

<p></p>

<div class="row">
    <div class="col-md-9">
        <h2>Camera Pose Solution</h2>
        <p>In eye-to-hand calibration, the camera is placed in a fixed position within the workspace where it observes the robot and the placement of its end effector (as a pattern is mounted onto the effector). Calibration establishes the transformation of the camera relative to the robot's base. Labelling the pattern, camera, robot base and robot end effector as \\(P\\), \\(C\\), \\(B\\) and \\(E\\) respectively, we can establish that:</p>
        <ul>
            <li>\\(T_B^E\\) is found through forward kinematics</li>
            <li>\\(T_C^P\\) is found through pattern identification</li>
            <li>\\(T_E^P\\) is constant (though it does not have to be known)</li>
            <li>\\(T_C^B\\) is constant and what we are trying to determine</li>
        </ul>
        <p>Utilising the fact that \\(T_E^P\\) is constant, we can find multiple corresponding values of \\(T_B^E\\) and \\(T_C^P\\) and write the following equations:
        \\[
        T_E^P={T_B^E}_1^{-1}T_B^C{T_C^P}_1={T_B^E}_2^{-1}T_B^C{T_C^P}_2
        \\]
        \\[
        {T_B^E}_2{T_B^E}_1^{-1}T_B^C=T_B^C{T_C^P}_2{T_C^P}_1^{-1}
        \\]
        </p>
        <p>The transforms are now in the form \\(AX=XB\\), where \\(X=T_B^C\\), \\(A={T_B^E}_2{T_B^E}_1^{-1}\\) and \\(B={T_C^P}_2{T_C^P}_1^{-1}\\).</p>
        <p>Given that \\(A\\), \\(X\\) and \\(B\\) are \\(SE(3)\\) matrices, the equation \\(AX=XB\\) can be written as:
        \\[
        \\begin{bmatrix}R_A & t_A\\\\0 & 1\\\\\\end{bmatrix}
        \\begin{bmatrix}R_X & t_X\\\\0 & 1\\\\\\end{bmatrix}=
        \\begin{bmatrix}R_X & t_X\\\\0 & 1\\\\\\end{bmatrix}
        \\begin{bmatrix}R_B & t_B\\\\0 & 1\\\\\\end{bmatrix}
        \\]
        </p>
        <p>These matrices can be expanded as the equations \\(R_AR_X=R_XR_B\\) and \\(R_At_X+t_A=R_Xt_B+t_X\\).</p>
        <p>The latter equation can be rearranged as \\((R_A-I)t_X=(R_Xt_B-t_A)\\), so \\(t_X\\) can be solved using least squares.</p>
        <p>The method we used (Tsai & Lenz, 1989) to solve for \\(R_X\\) (and the one implemented into our system) involves considering the unit axis vectors of \\(R_A\\) and \\(R_B\\), \\(a\\) and \\(b\\) respectively. They can be found by taking certain components of the skew matrix given by the logs of the rotation matrices, and are then normalised. These vectors satisfy the equation \\(Skew(a+b)=x(a-b)\\) where \\(x\\), when normalised, is the rotational axis of \\(R_X\\). The angle of rotation around \\(x\\) can be found with the formula \\(\\theta=2arctan(||x||)\\) for \\(x\\) before normalisation. These axis and angle values can be used to construct a rotation vector using Rodrigues' formula: \\(R_X=Icos(\\theta)+Skew(x)sin(\\theta)+xx^T(1-cos(\\theta))\\) (Dong, 2022).</p>
    </div>
    <div class="col-md-3">
        <img src="pages/hand-eye/estimation.jpg" class="img-fluid page-img" style="aspect-ratio: 0.75;" alt="...">
        <p style="text-align: center;">Camera Position Estimation</p>
        <img src="pages/hand-eye/simulation.png" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Simulation of Camera Position</p>
    </div>
</div>

<p></p>

<h2>Visual Servoing</h2>
<p>The objective of visual servoing is to control the position of the end effector of a robot to be at a certain pose relative to a known frame, like that of a pattern, utilising a camera feed to create an efficient closed-loop control system. This involves calculating an ideal position of identified image features in the camera feed relative to the actual measured ones. The error between the two pairs of points in the image is used to calculate the error between the ideal end effector position and its actual one. From there, an end effector velocity is derived to minimise the error.</p>
<p>We begin by calculating an error term to minimise, which we chose to be the difference in position between where a feature is in the camera feed and where we want it to be. The desired end effector velocity is set as proportional to this error term.</p>
<p>To convert from the image point velocity space to the cartesian velocity space, the following Jacobian is needed (Chaumette & Hutchinson, 2007):
\\[
L=\\begin{bmatrix}
\\frac{-1}{Z} & 0 & \\frac{x}{Z} & xy & -(1+x^2) & y\\\\
0 & \\frac{-1}{Z} & \\frac{y}{Z} & 1+y^2 & -xy & -x\\\\
\\end{bmatrix}
\\]
</p>
<p>RMRC control is a method of controlling the joint velocities of a robot using the desired velocity of the end effector, It is useful for planning smooth, well-defined end effector paths which avoid singularities (regions in the joint state space where the end effector is unable to move or rotate in a certain direction, so joint velocities approach infinity).</p>
<p>To achieve RMRC, the same Jacobian from inverse kinematics can be used. For a redundant manipulator seeking to avoid singularities, the equation \\(\\frac{dq}{dt}=J^T(JJ^T+\\lambda I)^{-1}\\frac{dx}{dt}\\) can be used, where \\(q\\) and \\(x\\) are the joint and cartesian (position and rotation) vectors respectively. The gain \\(\\lambda\\) can be 0, until the manipulability \\(\\mu=det(JJ^T)\\) falls below a certain threshold \\(\\varepsilon\\), in which case \\(\\lambda=\\lambda_0(1-(\\frac{\\mu}{\\varepsilon})^2)\\).</p>

<p></p>

<div class="row">
    <div class="col-md-5">
        <img src="pages/hand-eye/testing.jpg" class="img-fluid page-img" style="aspect-ratio: 1.5;" alt="...">
        <p style="text-align: center;">Testing Hand-Eye Calibration</p>
    </div>
    <div class="col-md-7">
        <h2>Testing</h2>
        <p>We tested our feature extraction software and found it was reasonably reliable at detecting the grid pattern in generic light conditions.</p>
        <p>Controlling the robot posed one of the largest challenges during the testing phase. We first utilised Gavin Paul's DOBOT Magician Driver (Paul, 2021) to send ROS commands to a Raspberry Pi through MATLAB. This driver was prone to crashing, forcing us to control the robot at a slow frequency with limited end effector positions.</p>
        <p>When testing hand-eye calibration, we found it easier to calculate the pose of the pattern relative to the end effector in one pass and use that value to speed up the system process to the visual servoing stage. This solution was also useful as our implementation of the \\(AX=XB\\) solver was not very reliable in practice.</p>
        <p>When testing visual servoing, we were very limited in how we could control the end effector, so we were unfortunately unable to perform a successful servoing demo. However, The visual servoing code did calculate valid joint velocities for the robot to get to the desired position.</p>
    </div>
</div>

<p></p>

<h2>References</h2>
<div style="padding-left: 3em; text-indent: -3em;">
<p>Chaumette, F., & Hutchinson, S. (2007). Visual servo control. I. Basic approaches. <em>IEEE Robotics & Automation Magazine, 13</em>(4), 82-90. https://doi.org/10.1109/mra.2006.250573</p>
<p>Corke, P. (2023). <em>Robotics Toolbox for MATLAB&reg release 10</em> [Computer software]. Retrieved from https://github.com/petercorke/robotics-toolbox-matlab</p>
<p>Denavit, J., & Hartenberg, R. S. (1955). A kinematic notation for lower-pair mechanisms based on matrices. <em>Journal of Applied Mechanics, 22</em>(2), 215-221. https://doi.org/10.1115/1.4011045</p>
<p>Dong, L. (2022). <em>hand-eye calibration</em> [Computer software]. Retrieved from https://github.com/LarryDong/HandEye-Tsai/tree/main</p>
<p>Gonz&aacutelez, F. (2023). A Hybrid Physical-Virtual Educational Robotic Arm. https://doi.org/10.20944/preprints202307.1168.v1 </p>
<p>Paul, G. (2021). <em>DOBOT Magician Driver</em> [Computer software]. Retrieved from https://github.com/gapaul/dobot_magician_driver</p>
<p>Tsai, R. Y., & Lenz, R. K. (1989). A new technique for fully autonomous and efficient 3D robotics hand/eye calibration. <em>IEEE Transactions on Robotics and Automation, 5</em>(3), 345-358. https://doi.org/10.1109/70.34770</p>
</div>
`,


"all-projects": `
<h1>All Projects</h1>
<div class="container-fluid p-0">
    <div class="row">
        <div class="floaty-card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('osteotomy-psi')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/osteotomy-psi/osteotomy_banner.png" class="img-fluid icon-img" alt="...">
                <p style="text-align: center;">Osteotomy PSI</p>
            </a>
        </div>
        <div class="floaty-card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('pliers')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/pliers/pliers.jpg" class="img-fluid icon-img" alt="...">
                <p style="text-align: center;">Monolithic Pliers</p>
            </a>
        </div>
        <div class="floaty-card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('welding-sim')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/welding-sim/environment.png" class="img-fluid icon-img" alt="...">
                <p style="text-align: center;">Welding Robot Simulation</p>
            </a>
        </div>
        <div class="floaty-card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('hand-eye')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/hand-eye/testing.jpg" class="img-fluid icon-img" alt="...">
                <p style="text-align: center;">Robot Hand-Eye Calibration</p>
            </a>
        </div>
    </div>
</div>
`,


"skills": `
<h1>Skills</h1>
<ul>
    <li><b>Programming Languages</b> - Python, Java, C, C++, JavaScript, MATLAB</li>
    <li><b>Systems</b> - Windows, Linux (Ubuntu), Macintosh</li>
    <li><b>CAD Software</b> - SOLIDWORKS, Autodesk Fusion</li>
    <li><b>Additive Manufacturing</b></li>
    <li><b>Hardware</b> - Arduino, STM-32, ESP32, FPGA</li>
    <li><b>Other Relevant Software</b> - MS Office Suite</li>
</ul><br>


<h1>Experience</h1>
<p><b>Jan 2025 - Jun 2025</b><br>
Company: Windtech Consultants<br>
<b>Role: Assistant Laboratory Engineer</b>
<ul>
    <li>Constructing scaled building/terrain models with hand and power tools, operating CNC machinery for precise fabrication</li>
    <li>Installing and testing pressure instrumentation on 3D-printed models to ensure experimental readiness</li>
    <li>Supporting engineers with wind tunnel setup and testing, contributing to successful experiments</li>
</ul><br>
</p>

<p><b>Feb 2025 - May 2025</b><br>
Company: University of Technology Sydney<br>
<b>Role: Embedded Mechatronic Systems Tutor</b>
<ul>
    <li>Tutoring students in FPGA and microcontroller programming, providing guidance to deepen understanding and technical skill</li>
    <li>Helping students improve assignment performance and maximise marks through targeted support</li>
    <li>Evaluating student performance and providing applicable feedback</li>
</ul><br>
</p>


<h1>Education</h1>
<p><b>Feb 2023 - Dec 2027 (expected)</b><br>
University of Technology Sydney<br>
<b>Degree: Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice</b>
<ul>
    <li>Majoring in Mechanical and Mechatronic Engineering</li>
</ul><br>
</p>
`,

"about": `
<h1>About Me</h1>
<p>education</p>
`,

"contact": `
<h1>Contact Me</h1>
<p>If you want to reach out to me about anything, or want to see what I'm up to, feel free to do so on the following platforms:</p>
<p>Email: elhachemchris73@gmail.com</p>
<p>Linkedin:
    <a
        href="https://www.linkedin.com/in/chris-el-hachem/"
        target="_blank"
        rel="noopener noreferrer"
    >
        linkedin.com/in/chris-el-hachem
    <\a>
</p>
<p>GitHub:
    <a
        href="https://github.com/Chris-El-Hachem"
        target="_blank"
        rel="noopener noreferrer"
    >
        github.com/Chris-El-Hachem
    <\a>
</p>
`,
}

const banners = {
"home": `
<img>
`,

"osteotomy-psi": `
<img src="pages/osteotomy-psi/osteotomy_banner.png" class="img-fluid" alt="...">
`,

"pliers": `
<img src="pages/pliers/pliers-banner.png" class="img-fluid" alt="...">
`,

"welding-sim": `
<img src="pages/welding-sim/welding-banner.png" class="img-fluid" alt="...">
`,

"hand-eye": `
<img src="pages/hand-eye/hand-eye-banner.png" class="img-fluid" alt="...">
`,

"all-projects": `

`,

"skills": `
<img src="pages/skills/A_processor_(Pixabay).jpg" class="img-fluid" alt="...">
`,

"about": `
<img>
`,

"contact": `
<img src="pages/contact/network_banner.jpg" class="img-fluid" alt="...">
`,
}

const cont = document.getElementById("main-content");
const banner_div = document.getElementById("banner")

async function goToPage(pageName) {
    if (!pageContents.hasOwnProperty(pageName)) return; 
    // The whitelist condition above ensures that this function will 
    // only change the inner HTML if the new HTML comes from the 
    // object, preventing JS injections and other bad stuff.
    cont.innerHTML = pageContents[pageName];
    MathJax.typeset();
    banner_div.innerHTML = banners[pageName];
}

goToPage("home");