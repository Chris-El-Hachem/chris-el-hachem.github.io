const pageContents = {
"home": `
<h1>Hi, I'm Chris!</h1>
<p>Thanks for checking out my portfolio!</p>
<p>I'm a third-year Mechanical and Mechatronic Engineering student with a passion for programming and 3D printing.</p>
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
    <div class="col-md-4">
        <a onclick="goToPage('osteotomy-psi')" href="#" class="thumbnail" style="text-decoration: none;">
            <img src="pages/osteotomy-psi/osteotomy_banner.png" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
            <p style="text-align: center;">Click for more info</p>
        </a>
    </div>
</div>
</div>
`,



"osteotomy-psi": `
<h1>Osteotomy PSI</h1>
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
<img src="pages/osteotomy-psi/measurements.png" class="img-fluid" style="aspect-ratio: 0.5; object-fit: cover" alt="...">
<p style="text-align: center;">Mechanical Axes of Legs</p>
</div>
</div>
<div class="row">
<div class="col-md-2">
<img src="pages/osteotomy-psi/miniaci.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Wedge Angle with Miniaci Method</p>
</div>
<div class="col-md-10">
<p>To combat this, the bone can undergo either a closing-wedge surgery on the inner leg (medial side) or opening-wedge on the outer leg (lateral side). I chose the closing-wedge surgery because it doesn't need a bone graft, it heals quickly, is more stable, more predictable, and easier to access in surgery while avoiding nerves, muscle, tendons, blood vessels and cartilage. This surgery can be conducted on the upper tibia or lower femur. I chose the upper tibia because it is easier to access, and the measurements I conducted suggests that the leg deformity partially originates from the tibia.</p>
<p>I found the suitable correction angle for the wedge using the Miniaci method, a reliable geometric heuristic. I plan the wedge to not cut entirely through the bone, so a thin bridge of bone can help stabilise the site during surgery and healing. I placed the hinge point ~15 mm below the top of the tibia and ~7.5 mm inwards from the lateral side of the bone. I calculated the correction angle to be ~7&deg.</p>
</div>

<p></p>

<div class="row">
<div class="col-md-10">
<h2>CT Scan Segmentation</h2>
<p>To design the suitable PSI's, I first needed a 3D model of the section of the bone where the surgery was planned to happen. The patient has a CT scan which contains detailed data of their skeleton, organs and flesh. Using software like Horos (what I used) or 3D Slicer, these different body structures can be segmented (separated into distinct volumes). With the bones of the patient's right knee segmented, the software can then turn the desired volume into a 3D mesh, a suitable file type for planning the surgery and designing the PSI's.</p>
</div>
<div class="col-md-2">
<img src="pages/osteotomy-psi/segment.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">CT Scan Segmented Bone</p>
</div>
</div>

<p></p>

<h2>Surgical Simulation</h2>
<p>To simulate the surgery on the bone, I used Blender as it is a very powerful and competent software for manipulating 3D meshes.</p>
<div class="row">
<div class="col-md-3">
<img src="pages/osteotomy-psi/before_surgery.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Before Surgery</p>
</div>
<div class="col-md-3">
<img src="pages/osteotomy-psi/wedge_cut.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Wedge Cut</p>
</div>
<div class="col-md-3">
<img src="pages/osteotomy-psi/overlay.gif" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Comparison with X-Ray</p>
</div>
<div class="col-md-3">
<img src="pages/osteotomy-psi/realigned.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
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
<img src="pages/osteotomy-psi/plate_model.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Plate Blender Model</p>
</div>
<div class="col-md-2">
<img src="pages/osteotomy-psi/plate3D.jpg" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Plate 3D-Printed Model</p>
</div>
</div>

<p></p>

<div class="row">
<div class="col-md-2">
<img src="pages/osteotomy-psi/guide_model.png" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
<p style="text-align: center;">Guide Blender Model</p>
</div>
<div class="col-md-2">
<img src="pages/osteotomy-psi/guide3D.jpg" class="img-fluid" style="aspect-ratio: 1; object-fit: cover" alt="...">
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



"all-projects": `
<h1>All Projects</h1>
<div class="container-fluid p-0">
    <div class="row">
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a onclick="goToPage('osteotomy-psi')" href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/osteotomy-psi/osteotomy_banner.png" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">Osteotomy PSI</p>
            </a>
        </div>
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;;">project name</p>
            </a>
        </div>
        <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <a href="#" class="thumbnail" style="text-decoration: none;">
                <img src="pages/contact/network_banner.jpg" class="img-fluid" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                <p style="text-align: center;">project name</p>
            </a>
        </div>
    </div>
</div>
`,

"skills": `
<h1>Skills</h1>
<p>website</p>
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

"all-projects": `
<img>
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
    banner_div.innerHTML = banners[pageName];
}

goToPage("home");