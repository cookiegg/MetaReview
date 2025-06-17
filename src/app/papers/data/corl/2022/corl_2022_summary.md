以下是对CoRL **2021年**至**2024年**论文研究趋势的分析和总结： 在过去几年中，机器人学领域的研究展现出显著的演进和深化，尤其是在**通用性、复杂任务处理、人机交互以及对大型模型的利用**方面。

### 1. **基础模型（Foundation Models）在机器人学中的崛起与深化**
这是2021-**2024年**间最引人注目的趋势。 

**2021年**：初步探索了语言与视觉的结合，例如将自然语言指令应用于机器人操作[1]和**语言接地**（language grounding）[2][3][5]。此时，预训练的视觉-语言模型（如CLIP）被用于视觉-语言的对齐[6]。 

**2022年**：大型语言模型（LLMs）开始被用于具身推理[7][8]，视觉-语言模型（VLMs）应用于视觉操作[9]，同时神经辐射场（NeRFs）也开始应用于物体和抓取任务[10][11][12]。 

**2023年**：对LLMs/VLMs的应用呈现爆炸式增长，成为**规划、推理和直接控制**的核心。LLMs被用于任务规划[13][14][19]，而VLM-based策略则广泛应用于各种操作任务[18][20][45]。**零样本泛化（zero-shot generalization）和开放词汇（open-vocabulary）任务**成为这些模型的重要研究方向[21][26][28]。 

**2024年**：LLMs/VLMs/VLAs的集成进一步深化。研究重点包括**具身思维链推理（Embodied Chain-of-Thought Reasoning）**[39]，**自主交互式纠正**[40]，通过LLMs**定义奖励函数**[17]，**LLM规划器的不确定性对齐**[13]，**语言接地**（如空间能力预测和物体消歧）[30][32][33]，以及**通用VLA模型**[46]。此外，**可提示仿真（promptable simulation）**也崭露头角[47]。

### 2. **从“数据中学习”到“数据辅助学习”：数据利用效率与范式演进**

研究重心从最初的强化学习（RL）/模仿学习（IL）应用，逐渐转向更**精细化和高效的数据利用策略**。 

**离线学习和自监督学习**：离线强化学习（Offline RL）在**2021年**开始受到关注[48][49][52]，并在**2022年**[53][54][56]和**2023年**[18][57][66]持续发展。自监督学习则被用于表示学习[53][67][72]和奖励函数整形[53]。 

**自主数据收集与改进**：**2023年**，**自主数据收集和自我改进**成为重要主题[31][73]，旨在减少对人工标注和环境重置的需求。 

**扩散模型（Diffusion Models）**：作为一种新型的生成模型，在**2023年**和**2024年**在离线RL[61][74]、轨迹生成[75]、物体操作[76]和运动规划[77]中展现出强大潜力。

### 3. **仿真到现实（Sim2Real）的桥接与泛化能力提升**

**将仿真环境中学习到的策略迁移到现实世界**是机器人学持续的挑战和重点。 

**2021年**：Sim2Real主要在特定操作任务中被提及[50]。 

**2022年**：更多论文明确关注Sim2Real，特别是在深度强化学习（DRL）[56][78][79]和操作任务[11][80]中。 

**2023年**：Sim2Real的努力持续加强，尤其是在复杂操作[81][82][84]、运动[74][85]和自动驾驶[86]等领域。**可微分仿真（differentiable simulation）**[81][86]和**数字孪生/表亲（digital twins/cousins）**[76]等技术被用于缩小差距。 

**2024年**：Sim2Real仍然是关键，重点在于**高效迁移**[84]，**视觉跑酷学习**[87]，**灵巧操作**[88][89]，**接触丰富任务**[82]，**自主赛车**[90]，以及**可泛化策略**[91]。

### 4. **复杂操作与通用性**

机器人操作任务的复杂性不断提升，对**通用化和泛化能力**的需求日益增加。 

**2021年**：集中于多步重排[1]、布料操作[67]、重新抓取[92]和6自由度（6D）抓取[93]。 

**2022年**：扩展到工具操作[94]、柔性交互[95]、**接触密集**操作[96]、**灵巧操作**[97][98]、以物体为中心的操作[99]和语言条件操作[9][100]。对**新物体**的泛化能力受到关注[99][101]。 

**2023年**：进一步探索长时程[14][75][106]、多阶段[107]、基于部件[108]的操作，以及对透明[76]和颗粒状物体[109][110]的操作。**双臂操作**[104]...和在**杂乱环境**中的鲁棒操作[113][114]也成为重点。 

**2024年**：继续强调**接触密集**[115][116]、**灵巧操作**[88][89][120]、**双臂操作**[111][112]、**开放世界抓取**[27][28][121]和**工具使用**[122]。

### 5. **安全、鲁棒性与不确定性**

确保机器人在不确定和动态环境中的**安全和鲁棒操作**是持续演进的核心问题。 

**2021年**：关注认证控制[123][124]、OOD检测[125]和鲁棒性。 

**2022年**：利用控制障碍函数（CBF）实现安全控制[126]，处理预测中的不确定性[127][128]，以及风险感知规划[129]。

**2023年**：CBF[130][131]、安全强化学习[65]...和故障检测[42][45][128]的发展。 

**2024年**：**可证明的安全导航**[135]，**感知模型的鲁棒性认证**[136]，用于鲁棒安全的**博弈玩法滤波器（Gameplay filters）**[132]，**不确定性感知决策Transformer**[64]，用于故障检测的**后悔度量（regret metric）**[137]，以及**保形预测（conformal prediction）**提供安全保证[138]。

### 6. **人机交互（HRI）与人类反馈学习**

**高效利用人类反馈和偏好**来指导机器人学习变得越来越重要。 

**2021年**：社交机器人（如backchanneling）[139]、行为归因[140]和从人类反馈/偏好中学习[141][142]。 

**2022年**：从偏好/评估反馈中学习奖励函数[143][144][145]，交互式查询[146][147]，合作教学[148]和咬食时机预测[149]。 

**2023年**：偏好学习引导搜索[150]，人类贡献偏好[151]，主动协助[152]，协作操作[153]以及用于数据收集的远程操作[154][155]。 

**2024年**：通过**比较性语言反馈学习奖励**[156]，**多机器人队主动学习中人类监督的分配**[157]，**基于基础模型的姿态信息机器人辅助**[158]，**脑机接口**[25]，以及**学习人类贡献偏好**[151]。

### 7. **先进感知与场景理解**

**多模态感知和复杂的3D表示**在机器人场景理解中发挥着越来越重要的作用。 

**2021年**：实例分割[139]、3D/隐式表示[159]、点云预测[160]和多传感器融合（视觉、听觉、触觉）[159]。 

**2022年**：鸟瞰图（BEV）表示[70]...、6D姿态估计[101]、工具的点云处理[94]、视觉-触觉融合[95][164][165]和NeRFs用于新视图合成[10][11]。 

**2023年**：3D高斯泼溅（3D Gaussian Splatting）[107][166][168]、用于非刚性放置的密集扩散[169]、稀疏视图的物体级映射[170]、听觉自监督[171]。 

**2024年**：**事件流3D高斯泼溅**[168]，**3D占用和占用流预测**[172]，用于协作感知的**LiDAR-相机融合**[18]，**基于体素的表示**[111]，用于3D场景的**神经注意力场**[166]，**区域感知抓取**[173]，**四次曲面表示用于SLAM**[174]。多传感器融合持续受到关注[115][175]。

总结

综合来看，CoRL 2021-2024的研究趋势显示出机器人学正从单一、受限的任务，向**更通用、更智能、更安全，并且能够与人类更自然地交互**的方向发展。**大型语言/视觉模型作为“大脑”**，结合**高效的数据利用策略（特别是离线和自监督学习）**鲁棒的Sim2Real技术，正在推动机器人实现更复杂的感知、决策和操作能力，尤其是在**开放世界和杂乱环境**中。**安全性和鲁棒性**被置于与性能同等重要的位置，并且研究人员正积极探索新方法来**量化和保证机器人的可靠性**。
 
-------------------------------------------------------------------------------- 

**参考文献：**

[1]Elias Stengel-Eskin; Andrew Hundt; Zhuohong He; Aditya Murali; Nakul Gopalan; Matthew Gombolay; Gregory D. Hager, "Guiding Multi-Step Rearrangement Tasks with Natural Language Instructions"

[67]Huy Ha; Shuran Song, "FlingBot: The Unreasonable Effectiveness of Dynamic Manipulation for Cloth Unfolding"

[139]Michael Murray; Nick Walker; Amal Nanavati; Patricia Alves-Oliveira; Nikita Filippov; Allison Sauppe; Bilge Mutlu; Maya Cakmak, "Learning Backchanneling Behaviors for a Social Robot via Data Augmentation from Human-Human Conversations"

[176]Chris Xie; Arsalan Mousavian; Yu Xiang; Dieter Fox, "RICE: Refining Instance Masks in Cluttered Environments with Graph Neural Networks"

[68]Huy Ha; Shuran Song, "FlingBot: The Unreasonable Effectiveness of Dynamic Manipulation for Cloth Unfolding"

[123]Charles Dawson; Zengyi Qin; Sicun Gao; Chuchu Fan, "Safe Nonlinear Control Using Robust Neural Lyapunov-Barrier Functions"

[125]Alec Farid; Sushant Veer; Anirudha Majumdar, "Task-Driven Out-of-Distribution Detection with Statistical Guarantees for Robot Learning"

[48]Eric Jang; Alex Irpan; Mohi Khansari; Daniel Kappler; Frederik Ebert; Corey Lynch; Sergey Levine; Chelsea Finn, "BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning"

[6]Samarth Sinha; Ajay Mandlekar; Animesh Garg, "S4RL: Surprisingly Simple Self-Supervision for Offline Reinforcement Learning in Robotics"

[159]Ruohan Gao; Yen-Yu Chang; Shivani Mall; Li Fei-Fei; Jiajun Wu, "ObjectFolder: A Dataset of Objects with Implicit Visual, Auditory, and Tactile Representations"

[177]Kaichun Mo; Yuzhe Qin; Fanbo Xiang; Hao Su; Leonidas Guibas, "O2O-Afford: Annotation-Free Large-Scale Object-Object Affordance Learning"

[49]Wonjoon Goo; Scott Niekum, "You Only Evaluate Once: a Simple Baseline Algorithm for Offline RL"

[160]Benedikt Mersch; Xieyuanli Chen; Jens Behley; Cyrill Stachniss, "Self-supervised Point Cloud Prediction Using 3D Spatio-temporal Convolutional Networks"

[2]Valts Blukis; Chris Paxton; Dieter Fox; Animesh Garg; Yoav Artzi, "A Persistent Spatial Semantic Representation for High-level Natural Language Instruction Execution"

[92]Shuo Cheng; Kaichun Mo; Lin Shao, "Learning to Regrasp by Learning to Place"

[50]Samarth Sinha; Ajay Mandlekar; Animesh Garg, "S4RL: Surprisingly Simple Self-Supervision for Offline Reinforcement Learning in Robotics"

[3]Jesse Thomason; Mohit Shridhar; Yonatan Bisk; Chris Paxton; Luke Zettlemoyer, "Language Grounding with 3D Objects"

[124]Weiye Zhao; Tairan He; Changliu Liu, "Model-free Safe Control for Zero-Violation Reinforcement Learning"

[140]Nick Walker; Christoforos Mavrogiannis; Siddhartha Srinivasa; Maya Cakmak, "Influencing Behavioral Attributions to Robot Motion During Task Execution"

[69]Hermann Blum; Francesco Milano; René Zurbrügg; Roland Siegwart; Cesar Cadena; Abel Gawel, "Self-Improving Semantic Perception for Indoor Localisation"

[178]Josiah Wong; Albert Tung; Andrey Kurenkov; Ajay Mandlekar; Li Fei-Fei; Silvio Savarese; Roberto Martín-Martín, "Error-Aware Imitation Learning from Teleoperation Data for Mobile Manipulation"

[4]Siddharth Karamcheti; Megha Srivastava; Percy Liang; Dorsa Sadigh, "LILA: Language-Informed Latent Actions"

[93]Lirui Wang; Yu Xiang; Wei Yang; Arsalan Mousavian; Dieter Fox, "Goal-Auxiliary Actor-Critic for 6D Robotic Grasping with Point Clouds"

[179]Brad Saund; Dmitry Berenson, "CLASP: Constrained Latent Shape Projection for Refining Object Shape from Robot Contact"

[180]Christopher Agia; Krishna Murthy Jatavallabhula; Mohamed Khodeir; Ondrej Miksik; Vibhav Vineet; Mustafa Mukadam; Liam Paull; Florian Shkurti, "Taskography: Evaluating robot task planning over large 3D scene graphs"

[181]Yunkun Xu; Zhenyu Liu; Guifang Duan; Jiangcheng Zhu; Xiaolong Bai; Jianrong Tan, "Look Before You Leap: Safe Model-Based Reinforcement Learning with Human Intervention"

[182]Norman Di Palo; Edward Johns, "Learning Multi-Stage Tasks with One Demonstration via Self-Replay"

[141]Vivek Myers; Erdem Biyik; Nima Anari; Dorsa Sadigh, "Learning Multimodal Rewards from Rankings"

[52]Suraj Nair; Eric Mitchell; Kevin Chen; brian ichter; Silvio Savarese; Chelsea Finn, "Learning Language-Conditioned Robot Behavior from Offline Data and Crowd-Sourced Annotation"

[142]Nils Wilde; Erdem Biyik; Dorsa Sadigh; Stephen L. Smith, "Learning Reward Functions from Scale Feedback"

[183]Debasmita Ghose; Michal Adam Lewkowicz; Kaleb Gezahegn; Julian Lee; Timothy Adamson; Marynel Vazquez; Brian Scassellati, "Tailoring Visual Object Representations to Human Requirements: A Case Study with a Recycling Robot"

[70]Zexi Chen; Haozhe Du; Xuecheng XU; Rong Xiong; Yiyi Liao; Yue Wang, "Learning Interpretable BEV Based VIO without Deep Neural Networks"

[184]Shuai Song; Shuo Yang; Ran Song; Shilei Chu; yibin Li; Wei Zhang, "Towards Online 3D Bin Packing: Learning Synergies between Packing and Unpacking via DRL"

[101]Yann Labbé; Lucas Manuelli; Arsalan Mousavian; Stephen Tyree; Stan Birchfield; Jonathan Tremblay; Justin Carpentier; Mathieu Aubry; Dieter Fox; Josef Sivic, "MegaPose: 6D Pose Estimation of Novel Objects via Render & Compare"

[127]Charles Packer; Nicholas Rhinehart; Rowan Thomas McAllister; Matthew A. Wright; Xin Wang; Jeff He; Sergey Levine; Joseph E. Gonzalez, "Is Anyone There? Learning a Planner Contingent on Perceptual Uncertainty"

[185]Bingjie Tang; Gaurav S. Sukhatme, "Selective Object Rearrangement in Clutter"

[94]Daniel Seita; Yufei Wang; Sarthak J Shetty; Edward Yao Li; Zackory Erickson; David Held, "ToolFlowNet: Robotic Manipulation with Tools via Predicting Tool Flow from Point Clouds"

[146]Tesca Fitzgerald; Pallavi Koppol; Patrick Callaghan; Russell Quinlan Jun Hei Wong; Reid Simmons; Oliver Kroemer; Henny Admoni, "INQUIRE: INteractive Querying for User-aware Informative REasoning"

[7]Wenlong Huang; Fei Xia; Ted Xiao; Harris Chan; Jacky Liang; Pete Florence; Andy Zeng; Jonathan Tompson; Igor Mordatch; Yevgen Chebotar; Pierre Sermanet; Tomas Jackson; Noah Brown; Linda Luu; Sergey Levine; Karol Hausman; brian ichter, "Inner Monologue: Embodied Reasoning through Planning with Language Models"

[126]Simin Liu; Changliu Liu; John Dolan, "Safe Control Under Input Limits with Neural Control Barrier Functions"

[80]Seungyeon Kim; Byeongdo Lim; Yonghyeon Lee; Frank C. Park, "SE(2)-Equivariant Pushing Dynamics Models for Tabletop Object Manipulations"

[78]Saminda Wishwajith Abeyruwan; Laura Graesser; David B D'Ambrosio; Avi Singh; Anish Shankar; Alex Bewley; Deepali Jain; Krzysztof Marcin Choromanski; Pannag R Sanketi, "i-Sim2Real: Reinforcement Learning of Robotic Policies in Tight Human-Robot Interaction Loops"

[95]Mark Van der Merwe; Dmitry Berenson; Nima Fazeli, "Learning the Dynamics of Compliant Tool-Environment Interaction for Visuo-Tactile Contact Servoing"

[71]Angad Singh; Omar Makhlouf; Maximilian Igl; Joao Messias; Arnaud Doucet; Shimon Whiteson, "Particle-Based Score Estimation for State Space Model Learning in Autonomous Driving"

[149]Jan Ondras; Abrar Anwar; Tong Wu; Fanjun Bu; Malte Jung; Jorge Jose Ortiz; Tapomayukh Bhattacharjee, "Human-Robot Commensality: Bite Timing Prediction for Robot-Assisted Feeding in Groups"

[53]Lina Mezghani; Sainbayar Sukhbaatar; Piotr Bojanowski; Alessandro Lazaric; Karteek Alahari, "Learning Goal-Conditioned Policies Offline with Self-Supervised Reward Shaping"

[10]Mohit Shridhar; Lucas Manuelli; Dieter Fox, "Perceiver-Actor: A Multi-Task Transformer for Robotic Manipulation"

[11]Justin Kerr; Letian Fu; Huang Huang; Yahav Avigal; Matthew Tancik; Jeffrey Ichnowski; Angjoo Kanazawa; Ken Goldberg, "Evo-NeRF: Evolving NeRF for Sequential Robot Grasping of Transparent Objects"

[96]Jacky Liang; Xianyi Cheng; Oliver Kroemer, "Learning Preconditions of Hybrid Force-Velocity Controllers for Contact-Rich Manipulation for Contact-Rich Manipulation"

[129]Mohamad Hosein Danesh; Panpan Cai; David Hsu, "LEADER: Learning Attention over Driving Behaviors for Planning under Uncertainty"

[186]Sergey Zakharov; Rares Andrei Ambrus; Katherine Liu; Adrien Gaidon, "ROAD: Learning an Implicit Recursive Octree Auto-Decoder to Efficiently Encode 3D Shapes"

[144]Neha Sunil; Shaoxiong Wang; Yu She; Edward Adelson; Alberto Rodriguez Garcia, "Visuotactile Affordances for Cloth Manipulation with Local Control"

[145]Donald Joseph Hejna III; Dorsa Sadigh, "Few-Shot Preference Learning for Human-in-the-Loop RL"

[187]Sudharshan Suresh; Zilin Si; Stuart Anderson; Michael Kaess; Mustafa Mukadam, "MidasTouch: Monte-Carlo inference over distributions across sliding touch"

[99]Yifeng Zhu; Abhishek Joshi; Peter Stone; Yuke Zhu, "VIOLA: Object-Centric Imitation Learning for Vision-Based Robot Manipulation"

[188]Ryan Hoque; Lawrence Yunliang Chen; Satvik Sharma; Karthik Dharmarajan; Brijen Thananjeyan; Pieter Abbeel; Ken Goldberg, "Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision"

[97]Jason Toskov; Rhys Newbury; Mustafa Mukadam; Dana Kulic; Akansel Cosgun, "In-Hand Gravitational Pivoting Using Tactile Sensing"

[12]Shaohong Zhong; Alessandro Albini; Oiwi Parker Jones; Perla Maiolino; Ingmar Posner, "Touching a NeRF: Leveraging Neural Radiance Fields for Tactile Sensory Data Generation"

[161]Runsheng Xu; Zhengzhong Tu; Hao Xiang; Wei Shao; Bolei Zhou; Jiaqi Ma, "CoBEVT: Cooperative Bird’s Eye View Semantic Segmentation with Sparse Transformers"

[9]Mohit Shridhar; Lucas Manuelli; Dieter Fox, "Perceiver-Actor: A Multi-Task Transformer for Robotic Manipulation"

[54]Wenjia Zhang; Haoran Xu; Haoyi Niu; Peng Cheng; Ming Li; Heming Zhang; Guyue Zhou; Xianyuan Zhan, "Discriminator-Guided Model-Based Offline Imitation Learning"

[162]Zhi Liu; Shaoyu Chen; Xiaojie Guo; Xinggang Wang; Tianheng Cheng; Hongmei Zhu; Qian Zhang; Wenyu Liu; Yi Zhang, "Vision-based Uneven BEV Representation Learning with Polar Rasterization and Surface Estimation"

[189]Junhao Cai; Jingcheng Su; Zida Zhou; Hui Cheng; Qifeng Chen; Michael Y Wang, "Volumetric-based Contact Point Detection for 7-DoF Grasping"

[55]Kaylee Burns; Tianhe Yu; Chelsea Finn; Karol Hausman, "Offline Reinforcement Learning at Multiple Frequencies"

[190]Ankur Deka; Changliu Liu; Katia P. Sycara, "ARC: Actor Residual Critic for Adversarial Imitation Learning"

[56]Haoyu Xiong; Haoyuan Fu; Jieyi Zhang; Chen Bao; Qiang Zhang; Yongxi Huang; Wenqiang Xu; Animesh Garg; Cewu Lu, "RoboTube: Learning Household Manipulation from Human Videos with Simulated Twin Environments"

[98]Jason Toskov; Rhys Newbury; Mustafa Mukadam; Dana Kulic; Akansel Cosgun, "In-Hand Gravitational Pivoting Using Tactile Sensing"

[72]Brian Okorn; Chuer Pan; Martial Hebert; David Held, "Deep Projective Rotation Estimation through Relative Supervision"

[163]Florent Bartoccioni; Eloi Zablocki; Andrei Bursuc; Patrick Perez; Matthieu Cord; Karteek Alahari, "LaRa: Latents and Rays for Multi-Camera Bird’s-Eye-View Semantic Segmentation"

[191]brian ichter; Anthony Brohan; Yevgen Chebotar; Chelsea Finn; Karol Hausman; Alexander Herzog; Daniel Ho; Julian Ibarz; Alex Irpan; Eric Jang; Ryan Julian; Dmitry Kalashnikov; Sergey Levine; Yao Lu; Carolina Parada; Kanishka Rao; Pierre Sermanet; Alexander T Toshev; Vincent Vanhoucke; Fei Xia; Ted Xiao; Peng Xu; Mengyuan Yan; Noah Brown; Michael Ahn; Omar Cortes; Nicolas Sievers; Clayton Tan; Sichun Xu; Diego Reyes; Jarek Rettinghouse; Jornell Quiambao; Peter Pastor; Linda Luu; Kuang-Huei Lee; Yuheng Kuang; Sally Jesmonth; Kyle Jeffrey; Rosario Jauregui Ruano; Jasmine Hsu; Keerthana Gopalakrishnan; Byron David; Andy Zeng; Chuyuan Kelly Fu, "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances"

[8]brian ichter; Anthony Brohan; Yevgen Chebotar; Chelsea Finn; Karol Hausman; Alexander Herzog; Daniel Ho; Julian Ibarz; Alex Irpan; Eric Jang; Ryan Julian; Dmitry Kalashnikov; Sergey Levine; Yao Lu; Carolina Parada; Kanishka Rao; Pierre Sermanet; Alexander T Toshev; Vincent Vanhoucke; Fei Xia; Ted Xiao; Peng Xu; Mengyuan Yan; Noah Brown; Michael Ahn; Omar Cortes; Nicolas Sievers; Clayton Tan; Sichun Xu; Diego Reyes; Jarek Rettinghouse; Jornell Quiambao; Peter Pastor; Linda Luu; Kuang-Huei Lee; Yuheng Kuang; Sally Jesmonth; Kyle Jeffrey; Rosario Jauregui Ruano; Jasmine Hsu; Keerthana Gopalakrishnan; Byron David; Andy Zeng; Chuyuan Kelly Fu, "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances"

[192]Minghua Liu; Xuanlin Li; Zhan Ling; Yangyan Li; Hao Su, "Frame Mining: a Free Lunch for Learning Robotic Manipulation from 3D Point Clouds"

[164]Neha Sunil; Shaoxiong Wang; Yu She; Edward Adelson; Alberto Rodriguez Garcia, "Visuotactile Affordances for Cloth Manipulation with Local Control"

[100]Pierre-Louis Guhur; Shizhe Chen; Ricardo Garcia Pinel; Makarand Tapaswi; Ivan Laptev; Cordelia Schmid, "Instruction-driven history-aware policies for robotic manipulations"

[147]Oguzhan Akcin; Po-han Li; Shubhankar Agarwal; Sandeep P. Chinchali, "Decentralized Data Collection for Robotic Fleet Learning: A Game-Theoretic Approach"

[148]Cunjun Yu; Yiqing Xu; Linfeng Li; David Hsu, "COACH: Cooperative Robot Teaching"

[128]Alec Farid; Sushant Veer; Boris Ivanovic; Karen Leung; Marco Pavone, "Task-Relevant Failure Detection for Trajectory Predictors in Autonomous Vehicles"

[193]Yunzhu Li; Shuang Li; Vincent Sitzmann; Pulkit Agrawal; Antonio Torralba, "3D Neural Scene Representations for Visuomotor Control"

[165]Neha Sunil; Shaoxiong Wang; Yu She; Edward Adelson; Alberto Rodriguez Garcia, "Visuotactile Affordances for Cloth Manipulation with Local Control"

[136]Hanjiang Hu; Zuxin Liu; Linyi Li; Jiacheng Zhu; Ding Zhao, "Robustness Certification of Visual Perception Models via Camera Motion Smoothing"

[150]Jiyong Ahn; Sanghyeon Son; Dongryung Lee; Jisu Han; Dongwon Son; Beomjoon Kim, "Preference learning for guiding the tree search in continuous POMDPs"

[57]Yevgen Chebotar; Quan Vuong; Karol Hausman; Fei Xia; Yao Lu; Alex Irpan; Aviral Kumar; Tianhe Yu; Alexander Herzog; Karl Pertsch; Keerthana Gopalakrishnan; Julian Ibarz; Ofir Nachum; Sumedh Anand Sontakke; Grecia Salazar; Huong T Tran; Jodilyn Peralta; Clayton Tan; Deeksha Manjunath; Jaspiar Singh; Brianna Zitkovich; Tomas Jackson; Kanishka Rao; Chelsea Finn; Sergey Levine, "Q-Transformer: Scalable Offline Reinforcement Learning via Autoregressive Q-Functions"

[194]Vivek Myers; Andre Wang He; Kuan Fang; Homer Rich Walke; Philippe Hansen-Estruch; Ching-An Cheng; Mihai Jalobeanu; Andrey Kolobov; Anca Dragan; Sergey Levine, "Goal Representations for Instruction Following: A Semi-Supervised Language Interface to Control"

[195]Ankit Goyal; Jie Xu; Yijie Guo; Valts Blukis; Yu-Wei Chao; Dieter Fox, "RVT: Robotic View Transformer for 3D Object Manipulation"

[196]Xiao Liu; Yifan Zhou; Shuhei Ikemoto; Heni Ben Amor, "$\alpha$-MDF: An Attention-based Multimodal Differentiable Filter for Robot State Estimation"

[197]Qiang Wang; Robert McCarthy; David Cordova Bulens; Kevin McGuinness; Noel E. O’Connor; Francisco Roldan Sanchez; Nico Gürtler; Felix Widmaier; Stephen J. Redmond, "Improving Behavioural Cloning with Positive Unlabeled Learning"

[198]Ilija Radosavovic; Baifeng Shi; Letian Fu; Ken Goldberg; Trevor Darrell; Jitendra Malik, "Robot Learning with Sensorimotor Pre-training"

[199]Ilija Radosavovic; Baifeng Shi; Letian Fu; Ken Goldberg; Trevor Darrell; Jitendra Malik, "Robot Learning with Sensorimotor Pre-training"

[102]Huy Ha; Pete Florence; Shuran Song, "Scaling Up and Distilling Down: Language-Guided Robot Skill Acquisition"

[13]Allen Z. Ren; Anushri Dixit; Alexandra Bodrova; Sumeet Singh; Stephen Tu; Noah Brown; Peng Xu; Leila Takayama; Fei Xia; Jake Varley; Zhenjia Xu; Dorsa Sadigh; Andy Zeng; Anirudha Majumdar, "Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners"

[58]Haochen Shi; Huazhe Xu; Samuel Clarke; Yunzhu Li; Jiajun Wu, "RoboCook: Long-Horizon Elasto-Plastic Object Manipulation with Diverse Tools"

[151]Michelle D Zhao; Reid Simmons; Henny Admoni, "Learning Human Contribution Preferences in Collaborative Human-Robot Tasks"

[20]Priyam Parashar; Vidhi Jain; Xiaohan Zhang; Jay Vakil; Sam Powers; Yonatan Bisk; Chris Paxton, "SLAP: Spatial-Language Attention Policies"

[14]Wenlong Huang; Chen Wang; Ruohan Zhang; Yunzhu Li; Jiajun Wu; Li Fei-Fei, "VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models"

[21]Austin Stone; Ted Xiao; Yao Lu; Keerthana Gopalakrishnan; Kuang-Huei Lee; Quan Vuong; Paul Wohlhart; Sean Kirmani; Brianna Zitkovich; Fei Xia; Chelsea Finn; Karol Hausman, "Open-World Object Manipulation using Pre-Trained Vision-Language Models"

[200]Zidan Wang; Takeru Oba; Takuma Yoneda; Rui Shen; Matthew Walter; Bradly C. Stadie, "Cold Diffusion on the Replay Buffer: Learning to Plan from Known Good States"

[201]Zhutian Yang; Jiayuan Mao; Yilun Du; Jiajun Wu; Joshua B. Tenenbaum; Tomás Lozano-Pérez; Leslie Pack Kaelbling, "Compositional Diffusion-Based Continuous Constraint Solvers"

[113]Manav Kulshrestha; Ahmed H Qureshi, "Structural Concept Learning via Graph Attention for Multi-Level Rearrangement Planning"

[81]Xinghao Zhu; Jinghan Ke; Zhixuan Xu; Zhixin Sun; Bizhe Bai; Jun Lv; Qingtao Liu; Yuwei Zeng; Qi Ye; Cewu Lu; Masayoshi Tomizuka; Lin Shao, "Diff-LfD: Contact-aware Model-based Learning from Visual Demonstration for Robotic Manipulation via Differentiable Physics-based Simulation and Rendering"

[85]Yuxing Wang; Shuang Wu; Tiantian Zhang; Yongzhe Chang; Haobo Fu; QIANG FU; Xueqian Wang, "PreCo: Enhancing Generalization in Co-Design of Modular Soft Robots via Brain-Body Pre-Training"

[158]Li-Heng Lin; Yuchen Cui; Yilun Hao; Fei Xia; Dorsa Sadigh, "Gesture-Informed Robot Assistance via Foundation Models"

[202]Jonathan Heewon Yang; Dorsa Sadigh; Chelsea Finn, "Polybot: Training One Policy Across Robots While Embracing Variability"

[154]Jiaheng Hu; Julian Whitman; Howie Choset, "GLSO: Grammar-guided Latent Space Optimization for Sample-efficient Robot Design Automation"

[59]Yunhai Feng; Nicklas Hansen; Ziyan Xiong; Chandramouli Rajagopalan; Xiaolong Wang, "Finetuning Offline World Models in the Real World"

[109]Shangjie Xue; Shuo Cheng; Pujith Kachana; Danfei Xu, "Neural Field Dynamics Model for Granular Object Piles Manipulation"

[22]Youngsun Wi; Mark Van der Merwe; Pete Florence; Andy Zeng; Nima Fazeli, "CALAMARI: Contact-Aware and Language conditioned spatial Action MApping for contact-RIch manipulation"

[15]Shuhan Tan; Boris Ivanovic; Xinshuo Weng; Marco Pavone; Philipp Kraehenbuehl, "Language Conditioned Traffic Generation"

[203]Mohammadreza Kasaei; Keyhan Kouhkiloui Babarahmati; Zhibin Li; Mohsen Khadem, "A Data-efficient Neural ODE Framework for Optimal Control of Soft Manipulators"

[16]Suvir Mirchandani; Fei Xia; Pete Florence; brian ichter; Danny Driess; Montserrat Gonzalez Arenas; Kanishka Rao; Dorsa Sadigh; Andy Zeng, "Large Language Models as General Pattern Machines"

[17]Wenhao Yu; Nimrod Gileadi; Chuyuan Fu; Sean Kirmani; Kuang-Huei Lee; Montserrat Gonzalez Arenas; Hao-Tien Lewis Chiang; Tom Erez; Leonard Hasenclever; Jan Humplik; brian ichter; Ted Xiao; Peng Xu; Andy Zeng; Tingnan Zhang; Nicolas Heess; Dorsa Sadigh; Jie Tan; Yuval Tassa; Fei Xia, "Language to Rewards for Robotic Skill Synthesis"

[204]Gaurav Datta; Ryan Hoque; Anrui Gu; Eugen Solowjow; Ken Goldberg, "IIFL: Implicit Interactive Fleet Learning from Heterogeneous Human Supervisors"

[75]Zhou Xian; Nikolaos Gkanatsios; Theophile Gervet; Tsung-Wei Ke; Katerina Fragkiadaki, "ChainedDiffuser: Unifying Trajectory Diffusion and Keypose Prediction for Robotic Manipulation"

[205]Gautam Salhotra; I-Chun Arthur Liu; Gaurav S. Sukhatme, "Learning Robot Manipulation from Cross-Morphology Demonstration"

[206]Brianna Zitkovich; Tianhe Yu; Sichun Xu; Peng Xu; Ted Xiao; Fei Xia; Jialin Wu; Paul Wohlhart; Stefan Welker; Ayzaan Wahid; Quan Vuong; Vincent Vanhoucke; Huong T Tran; Radu Soricut; Anikait Singh; Jaspiar Singh; Pierre Sermanet; Pannag R Sanketi; Grecia Salazar; Michael S Ryoo; Krista Reymann; Kanishka Rao; Karl Pertsch; Igor Mordatch; Henryk Michalewski; Yao Lu; Sergey Levine; Lisa Lee; Tsang-Wei Edward Lee; Isabel Leal; Yuheng Kuang; Dmitry Kalashnikov; Ryan Julian; Nikhil J Joshi; Alex Irpan; brian ichter; Jasmine Hsu; Alexander Herzog; Karol Hausman; Keerthana Gopalakrishnan; Byron David; Andy Zeng; Chuyuan Kelly Fu, "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control"

[23]Ali Athar; Enxu Li; Sergio Casas; Raquel Urtasun, "4D-Former: Multimodal 4D Panoptic Segmentation"

[207]Lili Chen; Shikhar Bahl; Deepak Pathak, "PlayFusion: Skill Acquisition via Diffusion from Language-Annotated Play"

[24]Yanjie Ze; Ge Yan; Yueh-Hua Wu; Annabella Macaluso; Yuying Ge; Jianglong Ye; Nicklas Hansen; Li Erran Li; Xiaolong Wang, "GNFactor: Multi-Task Real Robot Learning with Generalizable Neural Feature Fields"

[208]Shizhe Chen; Ricardo Garcia Pinel; Cordelia Schmid; Ivan Laptev, "PolarNet: 3D Point Clouds for Language-Guided Robotic Manipulation"

[25]Ruohan Zhang; Sharon Lee; Minjune Hwang; Ayano Hiranaka; Chen Wang; Wensi Ai; Jin Jie Ryan Tan; Shreya Gupta; Yilun Hao; Gabrael Levine; Ruohan Gao; Anthony Norcia; Li Fei-Fei; Jiajun Wu, "NOIR: Neural Signal Operated Intelligent Robots for Everyday Activities"

[209]Homer Rich Walke; Kevin Black; Tony Z. Zhao; Quan Vuong; Chongyi Zheng; Philippe Hansen-Estruch; Andre Wang He; Vivek Myers; Moo Jin Kim; Max Du; Abraham Lee; Kuan Fang; Chelsea Finn; Sergey Levine, "BridgeData V2: A Dataset for Robot Learning at Scale"

[210]Zhanteng Xie; Philip Dames, "Stochastic Occupancy Grid Map Prediction in Dynamic Scenes"

[211]Shiqi Liu; Mengdi Xu; Peide Huang; Xilun Zhang; Yongkang Liu; Kentaro Oguchi; Ding Zhao, "Continual Vision-based Reinforcement Learning with Group Symmetries"

[90]Peter Werner; Tim Seyde; Paul Drews; Thomas Matrai Balch; Igor Gilitschenski; Wilko Schwarting; Guy Rosman; Sertac Karaman; Daniela Rus, "Dynamic Multi-Team Racing: Competitive Driving on 1/10-th Scale Vehicles via Learning in Simulation"

[212]Harel Biggie; Ajay Narasimha Mopidevi; Dusty Woods; Chris Heckman, "Tell Me Where to Go: A Composable Framework for Context-Aware Embodied Robot Navigation"

[82]Xiang Zhang; Changhao Wang; Lingfeng Sun; Zheng Wu; Xinghao Zhu; Masayoshi Tomizuka, "Efficient Sim-to-real Transfer of Contact-Rich Manipulation Skills with Online Admittance Residual Learning"

[26]Shiyang Lu; Haonan Chang; Eric Pu Jing; Abdeslam Boularias; Kostas Bekris, "OVIR-3D: Open-Vocabulary 3D Instance Retrieval Without Training on 3D Data"

[60]Sravan Jayanthi; Letian Chen; Nadya Balabanska; Van Duong; Erik Scarlatescu; Ezra Ameperosa; Zulfiqar Haider Zaidi; Daniel Martin; Taylor Keith Del Matto; Masahiro Ono; Matthew Gombolay, "DROID: Learning from Offline Heterogeneous Demonstrations via Reward-Policy Distillation"

[213]Leon Kim; Yunshuang Li; Michael Posa; Dinesh Jayaraman, "Im2Contact: Vision-Based Contact Localization Without Touch or Force Sensing"

[103]Chen Wang; Linxi Fan; Jiankai Sun; Ruohan Zhang; Li Fei-Fei; Danfei Xu; Yuke Zhu; Anima Anandkumar, "MimicPlay: Long-Horizon Imitation Learning by Watching Human Play"

[27]Georgios Tziafas; Yucheng XU; Arushi Goel; Mohammadreza Kasaei; Zhibin Li; Hamidreza Kasaei, "Language-guided Robot Grasping: CLIP-based Referring Grasp Synthesis in Clutter"

[28]Adam Rashid; Satvik Sharma; Chung Min Kim; Justin Kerr; Lawrence Yunliang Chen; Angjoo Kanazawa; Ken Goldberg, "Language Embedded Radiance Fields for Zero-Shot Task-Oriented Grasping"

[214]Yuan Zhang; Jianhong Wang; Joschka Boedecker, "Robust Reinforcement Learning in Continuous Control Tasks with Uncertainty Set Regularization"

[61]Jianlan Luo; Perry Dong; Jeffrey Wu; Aviral Kumar; Xinyang Geng; Sergey Levine, "Action-Quantized Offline Reinforcement Learning for Robotic Skill Learning"

[29]Ziyuan Zhong; Davis Rempe; Yuxiao Chen; Boris Ivanovic; Yulong Cao; Danfei Xu; Marco Pavone; Baishakhi Ray, "Language-Guided Traffic Simulation via Scene-Level Diffusion"

[30]Arjun Majumdar; Fei Xia; brian ichter; Dhruv Batra; Leonidas Guibas, "FindThis: Language-Driven Object Disambiguation in Indoor Environments"

[108]Weiyu Liu; Jiayuan Mao; Joy Hsu; Tucker Hermans; Animesh Garg; Jiajun Wu, "Composable Part-Based Manipulation"

[104]Priya Sundaresan; Jiajun Wu; Dorsa Sadigh, "Learning Sequential Acquisition Policies for Robot-Assisted Feeding"

[62]Daniel Dauner; Marcel Hallgarten; Andreas Geiger; Kashyap Chitta, "Parting with Misconceptions about Learning-based Vehicle Motion Planning"

[63]Xubo Lyu; Hanyang Hu; Seth Siriya; Ye Pu; Mo Chen, "Task-Oriented Koopman-Based Control with Contrastive Encoder"

[215]Jason Xinyu Liu; Ziyi Yang; Ifrah Idrees; Sam Liang; Benjamin Schornstein; Stefanie Tellex; Ankit Shah, "Grounding Complex Natural Language Commands for Temporal Tasks in Unseen Environments"

[152]Maithili Patel; Aswin Gururaj Prakash; Sonia Chernova, "Predicting Routine Object Usage for Proactive Robot Assistance"

[153]Kushal Kedia; Prithwish Dan; Atiksh Bhardwaj; Sanjiban Choudhury, "ManiCast: Collaborative Manipulation with Cost-Aware Human Forecasting"

[171]Abitha Thankaraj; Lerrel Pinto, "That Sounds Right: Auditory Self-Supervision for Dynamic Robot Manipulation"

[18]Binyu Zhao; Wei ZHANG; Zhaonian Zou, "BM2CP: Efficient Collaborative Perception with LiDAR-Camera Modalities"

[114]Shuai Song; Shuo Yang; Ran Song; Shilei Chu; yibin Li; Wei Zhang, "Towards Online 3D Bin Packing: Learning Synergies between Packing and Unpacking via DRL"

[86]Chris Zhang; James Tu; Lunjun Zhang; Kelvin Wong; Simon Suo; Raquel Urtasun, "Learning Realistic Trafﬁc Agents in Closed-loop"

[135]Zhan Gao; Guang Yang; Jasmine Bayrooti; Amanda Prorok, "Provably Safe Online Multi-Agent Navigation in Unknown Environments"

[156]Zhaojing Yang; Miru Jun; Jeremy Tien; Stuart Russell; Anca Dragan; Erdem Biyik, "Trajectory Improvement and Reward Learning from Comparative Language Feedback"

[216]Yishu Li; Wen Hui Leng; Yiming Fang; Ben Eisner; David Held, "FlowBotHD: History-Aware Diffuser Handling Ambiguities in Articulated Objects Manipulation"

[217]Balazs Gyenes; Nikolai Franke; Philipp Becker; Gerhard Neumann, "PointPatchRL - Masked Reconstruction Improves Reinforcement Learning on Point Clouds"

[88]Toru Lin; Zhao-Heng Yin; Haozhi Qi; Pieter Abbeel; Jitendra Malik, "Twisting Lids Off with Two Hands"

[47]Shuhan Tan; Boris Ivanovic; Yuxiao Chen; Boyi Li; Xinshuo Weng; Yulong Cao; Philipp Kraehenbuehl; Marco Pavone, "Promptable Closed-loop Traffic Simulation"

[218]Byeongdo Lim; Jongmin Kim; Jihwan Kim; Yonghyeon Lee; Frank C. Park, "EquiGraspFlow: SE(3)-Equivariant 6-DoF Grasp Pose Generative Flows"

[219]Tarek El-Agroudi; Finn Gross Maurer; Jørgen Anker Olsen; Kostas Alexis, "In-Flight Attitude Control of a Quadruped using Deep Reinforcement Learning"

[220]Mitsuhiko Nakamoto; Oier Mees; Aviral Kumar; Sergey Levine, "Steering Your Generalists: Improving Robotic Foundation Models via Value Guidance"

[221]Xiao Chen; Tianle Ni; Kübra Karacan; Hamid Sadeghian; Sami Haddadin, "Online Transfer and Adaptation of Tactile Skill: A Teleoperation Framework"

[76]Songlin Wei; Haoran Geng; Jiayi Chen; Congyue Deng; Cui Wenbo; Chengyang Zhao; Xiaomeng Fang; Leonidas Guibas; He Wang, "D$^3$RoMa: Disparity Diffusion-based Depth Sensing for Material-Agnostic Robotic Manipulation"

[222]Erik Bauer; Marc Blöchlinger; Pascal Strauch; Arman Raayatsanati; Cavelti Curdin; Robert K. Katzschmann, "An Open-Source Soft Robotic Platform for Autonomous Aerial Manipulation in the Wild"

[31]Zhiyuan Zhou; Pranav Atreya; Abraham Lee; Homer Rich Walke; Oier Mees; Sergey Levine, "Autonomous Improvement of Instruction Following Skills via Foundation Models"

[130]Lakshmideepakreddy Manda; Shaoru Chen; Mahyar Fazlyab, "Learning Performance-oriented Control Barrier Functions Under Complex Safety Constraints and Limited Actuation"

[223]Aman Sinha; Payam Nikdel; Supratik Paul; Shimon Whiteson, "Rate-Informed Discovery via Bayesian Adaptive Multifidelity Sampling"

[107]Olaolu Shorinwa; Johnathan Tucker; Aliyah Smith; Aiden Swann; Timothy Chen; Roya Firoozi; Monroe David Kennedy; Mac Schwager, "Splat-MOVER: Multi-Stage, Open-Vocabulary Robotic Manipulation via Editable Gaussian Splatting"

[224]Teli Ma; Jiaming Zhou; Zifan Wang; Ronghe Qiu; Junwei Liang, "Contrastive Imitation Learning for Language-guided Multi-Task Robotic Manipulation"

[157]Oguzhan Akcin; Ahmet Ege Tanriverdi; Kaan Kale; Sandeep P. Chinchali, "Fleet Supervisor Allocation: A Submodular Maximization Approach"

[166]Qianxu Wang; Congyue Deng; Tyler Ga Wei Lum; Yuanpei Chen; Yaodong Yang; Jeannette Bohg; Yixin Zhu; Leonidas Guibas, "Neural Attention Field: Emerging Point Relevance in 3D Scenes for One-Shot Dexterous Grasping"

[77]Huang Huang; Balakumar Sundaralingam; Arsalan Mousavian; Adithyavairavan Murali; Ken Goldberg; Dieter Fox, "DiffusionSeeder: Seeding Motion Optimization with Diffusion for Rapid Motion Planning"

[111]I-Chun Arthur Liu; Sicheng He; Daniel Seita; Gaurav S. Sukhatme, "VoxAct-B: Voxel-Based Acting and Stabilizing Policy for Bimanual Manipulation"

[225]Chong Zhang; Wenli Xiao; Tairan He; Guanya Shi, "WoCoCo: Learning Whole-Body Humanoid Control with Sequential Contacts"

[226]Huihan Liu; Yu Zhang; Vaarij Betala; Evan Zhang; James Liu; Crystal Ding; Yuke Zhu, "Multi-Task Interactive Robot Fleet Learning with Visual World Models"

[167]Ziwei Liao; Binbin Xu; Steven L. Waslander, "Toward General Object-level Mapping from Sparse Views with 3D Diffusion Priors"

[168]Tianyi Xiong; Jiayi Wu; Botao He; Cornelia Fermuller; Yiannis Aloimonos; Heng Huang; Christopher Metzler, "Event3DGS: Event-Based 3D Gaussian Splatting for High-Speed Robot Egomotion"

[137]Kensuke Nakamura; Thomas Tian; Andrea Bajcsy, "Not All Errors Are Made Equal: A Regret Metric for Detecting System-level Trajectory Prediction Failures"

[32]Wentao Yuan; Jiafei Duan; Valts Blukis; Wilbert Pumacay; Ranjay Krishna; Adithyavairavan Murali; Arsalan Mousavian; Dieter Fox, "RoboPoint: A Vision-Language Model for Spatial Affordance Prediction in Robotics"

[33]Runsen Xu; Zhiwei Huang; Tai Wang; Yilun Chen; Jiangmiao Pang; Dahua Lin, "VLM-Grounder: A VLM Agent for Zero-Shot 3D Visual Grounding"

[227]Xiaogang Jia; Qian Wang; Atalay Donat; Bowen Xing; Ge Li; Hongyi Zhou; Onur Celik; Denis Blessing; Rudolf Lioutikov; Gerhard Neumann, "MaIL: Improving Imitation Learning with Selective State Space Models"

[117]Yujin Tang; Wenhao Yu; Jie Tan; Heiga Zen; Aleksandra Faust; Tatsuya Harada, "SayTap: Language to Quadrupedal Locomotion"

[34]Shiyu Jin; JINXUAN XU; Yutian Lei; Liangjun Zhang, "Reasoning Grasping via Multimodal Large Language Model"

[175]Jialiang Zhao; Yuxiang Ma; Lirui Wang; Edward Adelson, "Transferable Tactile Transformers for Representation Learning Across Diverse Sensors and Tasks"

[132]Duy Phuong Nguyen; Kai-Chieh Hsu; Wenhao Yu; Jie Tan; Jaime Fernández Fisac, "Gameplay Filters: Robust Zero-Shot Safety through Adversarial Imagination"

[228]Jimmy Wu; William Chong; Robert Holmberg; Aaditya Prasad; Yihuai Gao; Oussama Khatib; Shuran Song; Szymon Rusinkiewicz; Jeannette Bohg, "TidyBot++: An Open-Source Holonomic Mobile Manipulator for Robot Learning"

[64]Zenan Li; Fan Nie; Qiao Sun; Fang Da; Hang Zhao, "Uncertainty-Aware Decision Transformer for Stochastic Driving Environments"

[229]Hang Liu; Yi Cheng; Rankun Li; Xiaowen Hu; Linqi Ye; Houde Liu, "MBC: Multi-Brain Collaborative Control for Quadruped Robots"

[230]Tianyi Ko; Takuya Ikeda; Hiroya Sato; Koichi Nishiwaki, "A Planar-Symmetric SO(3) Representation for Learning Grasp Detection"

[36]Thomas Tian; Boyi Li; Xinshuo Weng; Yuxiao Chen; Edward Schmerling; Yue Wang; Boris Ivanovic; Marco Pavone, "Tokenize the World into Object-level Knowledge to Address Long-tail Events in Autonomous Driving"

[65]Luke Rowe; Roger Girgis; Anthony Gosselin; Bruno Carrez; Florian Golemo; Felix Heide; Liam Paull; Christopher Pal, "CtRL-Sim: Reactive and Controllable Driving Agents with Offline Reinforcement Learning"

[122]Jiangran Lyu; Yuxing Chen; Tao Du; Feng Zhu; Huiquan Liu; Yizhou Wang; He Wang, "ScissorBot: Learning Generalizable Scissor Skill for Paper Cutting via Simulation, Imitation, and Sim2Real"

[37]Dantong Niu; Yuvan Sharma; Giscard Biamby; Jerome Quenum; Yutong Bai; Baifeng Shi; Trevor Darrell; Roei Herzig, "LLARVA: Vision-Action Instruction Tuning Enhances Robot Learning"

[121]Georgios Tziafas; Hamidreza Kasaei, "Towards Open-World Grasping with Large Vision-Language Models"

[231]Tong Zhang; Yingdong Hu; Jiacheng You; Yang Gao, "Leveraging Locality to Boost Sample Efficiency in Robotic Manipulation"

[110]Haodi Hu; Feifei Qian; Daniel Seita, "Learning Granular Media Avalanche Behavior for Indirectly Manipulating Obstacles on a Granular Slope"

[39]Michał Zawalski; William Chen; Karl Pertsch; Oier Mees; Chelsea Finn; Sergey Levine, "Robotic Control via Embodied Chain-of-Thought Reasoning"

[40]Chuyan Xiong; Chengyu Shen; Xiaoqi Li; Kaichen Zhou; Jiaming Liu; Ruiping Wang; Hao Dong, "Autonomous Interactive Correction MLLM for Robust Robotic Manipulation"

[89]Jun Wang; Ying Yuan; Haichuan Che; Haozhi Qi; Yi Ma; Jitendra Malik; Xiaolong Wang, "Lessons from Learning to Spin “Pens”"

[83]Halid Abdulrahim Kadi; Kasim Terzić, "JA-TN: Pick-and-Place Towel Shaping from Crumpled States based on TransporterNet with Joint-Probability Action Inference"

[119]Fengbo Lan; Shengjie Wang; Yunzhe Zhang; Haotian Xu; Oluwatosin OluwaPelumi Oseni; Ziye Zhang; Yang Gao; Tao Zhang, "DexCatch: Learning to Catch Arbitrary Objects with Dexterous Hands"

[172]Yili Liu; Linzhan Mou; Xuan Yu; Chenrui Han; Sitong Mao; Rong Xiong; Yue Wang, "Let Occ Flow: Self-Supervised 3D Occupancy Flow Prediction"

[73]Suvir Mirchandani; Suneel Belkhale; Joey Hejna; Evelyn Choi; Md Sazzad Islam; Dorsa Sadigh, "So You Think You Can Scale Up Autonomous Robot Data Collection?"

[155]Xuxin Cheng; Jialong Li; Shiqi Yang; Ge Yang; Xiaolong Wang, "Open-TeleVision: Teleoperation with Immersive Active Visual Feedback"

[91]Xinyu Zhang; Yuhan Liu; Haonan Chang; Abdeslam Boularias, "Scaling Manipulation Learning with Visual Kinematic Chain Prediction"

[46]Moo Jin Kim; Karl Pertsch; Siddharth Karamcheti; Ted Xiao; Ashwin Balakrishna; Suraj Nair; Rafael Rafailov; Ethan P Foster; Pannag R Sanketi; Quan Vuong; Thomas Kollar; Benjamin Burchfiel; Russ Tedrake; Dorsa Sadigh; Sergey Levine; Percy Liang; Chelsea Finn, "OpenVLA: An Open-Source Vision-Language-Action Model"

[133]Piotr Kicki; Davide Tateo; Puze Liu; Jonas Günster; Jan Peters; Krzysztof Walas, "Bridging the gap between Learning-to-plan, Motion Primitives and Safe Reinforcement Learning"

[115]Binghao Huang; Yixuan Wang; Xinyi Yang; Yiyue Luo; Yunzhu Li, "3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing"

[232]Jiaxu Xing; Angel Romero; Leonard Bauersfeld; Davide Scaramuzza, "Bootstrapping Reinforcement Learning with Imitation for Vision-Based Agile Flight"

[138]Anushri Dixit; Zhiting Mei; Meghan Booker; Mariko Storey-Matsutani; Allen Z. Ren; Anirudha Majumdar, "Perceive With Confidence: Statistical Safety Assurances for Navigation with Learning-Based Perception"

[87]Alan Yu; Ge Yang; Ran Choi; Yajvan Ravan; John Leonard; Phillip Isola, "Learning Visual Parkour from Generated Images"

[233]Boce Hu; Xupeng Zhu; Dian Wang; Zihao Dong; Haojie Huang; Chenghao Wang; Robin Walters; Robert Platt, "OrbitGrasp: SE(3)-Equivariant 6-DoF Grasp Pose Generative Flows"

[84]Lawrence Yunliang Chen; Chenfeng Xu; Karthik Dharmarajan; Richard Cheng; Kurt Keutzer; Masayoshi Tomizuka; Quan Vuong; Ken Goldberg, "RoVi-Aug: Robot and Viewpoint Augmentation for Cross-Embodiment Robot Learning"

[105]Zihan Zhou; Animesh Garg; Dieter Fox; Caelan Reed Garrett; Ajay Mandlekar, "SPIRE: Synergistic Planning, Imitation, and Reinforcement Learning for Long-Horizon Manipulation"

[234]Tianhao Wei; Liqian Ma; Rui Chen; Weiye Zhao; Changliu Liu, "Meta-Control: Automatic Model-based Control Synthesis for Heterogeneous Robot Skills"

[41]Huaxiaoyue Wang; Kushal Kedia; Juntao Ren; Rahma Abdullah; Atiksh Bhardwaj; Angela Chao; Kelly Y Chen; Nathaniel Chin; Prithwish Dan; Xinyi Fan; Gonzalo Gonzalez-Pumariega; Aditya Kompella; Maximus Adrian Pace; Yash Sharma; Xiangwan Sun; Neha Sunkara; Sanjiban Choudhury, "MOSAIC: Modular Foundation Models for Assistive and Interactive Cooking"

[66]Prajwal Koirala; Cody Fleming, "Solving Offline Reinforcement Learning with Decision Tree Regression"

[235]Dhruva Tirumala; Markus Wulfmeier; Ben Moran; Sandy Huang; Jan Humplik; Guy Lever; Tuomas Haarnoja; Leonard Hasenclever; Arunkumar Byravan; Nathan Batchelor; Neil sreendra; Kushal Patel; Marlon Gwira; Francesco Nori; Martin Riedmiller; Nicolas Heess, "Learning Robot Soccer from Egocentric Vision with Deep Reinforcement Learning"

[236]Yuxing Long; Wenzhe Cai; Hongcheng Wang; Guanqi Zhan; Hao Dong, "InstructNav: Zero-shot System for Generic Instruction Navigation in Unexplored Environment"

[237]Mingtong Zhang; Kaifeng Zhang; Yunzhu Li, "Dynamic 3D Gaussian Tracking for Graph-Based Neural Dynamics Modeling"

[42]Zihan Wang; Brian Liang; Varad Dhat; Zander Brumbaugh; Nick Walker; Ranjay Krishna; Maya Cakmak, "I Can Tell What I am Doing: Toward Real-World Natural Language Grounding of Robot Experiences"

[173]Siang Chen; Pengwei Xie; Wei Tang; Dingchang Hu; Yixiang Dai; Guijin Wang, "Region-aware Grasp Framework with Normalized Grasp Space for Efficient 6-DoF Grasping"

[131]Hanjiang Hu; Yujie Yang; Tianhao Wei; Changliu Liu, "Verification of Neural Control Barrier Functions with Symbolic Derivative Bounds Propagation"

[238]Yinsen Jia; Boyuan Chen, "ClutterGen: A Cluttered Scene Generator for Robot Learning"

[174]Chensheng Peng; Chenfeng Xu; Yue Wang; Mingyu Ding; Heng Yang; Masayoshi Tomizuka; Kurt Keutzer; Marco Pavone; Wei Zhan, "Q-SLAM: Quadric Representations for Monocular SLAM"

[106]RenMing Huang; Shaochong Liu; Yunqiang Pei; Peng Wang; Guoqing Wang; Yang Yang; Heng Tao Shen, "Goal-Reaching Policy Learning from Non-Expert Observations via Effective Subgoal Guidance"

[112]Andrew Choong-Won Lee; Ian Chuang; Ling-Yuan Chen; Iman Soltani, "InterACT: Inter-dependency Aware Action Chunking with Hierarchical Attention Transformers for Bimanual Manipulation"

[239]Siyuan Huang; Haonan Chang; Yuhan Liu; Yimeng Zhu; Hao Dong; Abdeslam Boularias; Peng Gao; Hongsheng Li, "A3VLM: Actionable Articulation-Aware Vision Language Model"

[240]Huaxiaoyue Wang; Nathaniel Chin; Gonzalo Gonzalez-Pumariega; Xiangwan Sun; Neha Sunkara; Maximus Adrian Pace; Jeannette Bohg; Sanjiban Choudhury, "APRICOT: Active Preference Learning and Constraint-Aware Task Planning with LLMs"

[74]Xiaoyu Huang; Yufeng Chi; Ruofeng Wang; Zhongyu Li; Xue Bin Peng; Sophia Shao; Borivoje Nikolic; Koushil Sreenath, "DiffuseLoco: Real-Time Legged Locomotion Control with Diffusion from Offline Datasets"

[241]Mohammadreza Kasaei; Hamidreza Kasaei; Mohsen Khadem, "SoftManiSim: A Fast Simulation Framework for Multi-Segment Continuum Manipulators Tailored for Robot Learning"

[43]William F Whitney; Jake Varley; Deepali Jain; Krzysztof Marcin Choromanski; Sumeet Singh; Vikas Sindhwani, "Modeling the Real World with High-Density Visual Particle Dynamics"

[19]Aidan Curtis; Nishanth Kumar; Jing Cao; Tomás Lozano-Pérez; Leslie Pack Kaelbling, "Trust the PRoC3S: Solving Long-Horizon Robotics Problems with LLMs and Constraint Satisfaction"

[170]Ziwei Liao; Binbin Xu; Steven L. Waslander, "Toward General Object-level Mapping from Sparse Views with 3D Diffusion Priors"

[242]Noriaki Hirose; Dhruv Shah; Kyle Stachowicz; Ajay Sridhar; Sergey Levine, "SELFI: Autonomous Self-Improvement with RL for Vision-Based Navigation around People"

[116]William Xie; Maria Valentini; Jensen Lavering; Nikolaus Correll, "DeliGrasp: Inferring Object Properties with LLMs for Adaptive Grasp Policies"

[169]Eric Cai; Octavian Donca; Ben Eisner; David Held, "Non-rigid Relative Placement through 3D Dense Diffusion"

[44]Zeyu Dong; Yimin Zhu; Yansong Li; Kevin Mahon; Yu Sun, "Generalizing End-To-End Autonomous Driving In Real-World Environments Using Zero-Shot LLMs"

[134]Ahmed Agha; Baris Kayalibay; Atanas Mirchev; Patrick van der Smagt; Justin Bayer, "Exploring Under Constraints with Model-Based Actor-Critic and Safety Filters"

[243]Cheng Qian; Julen Urain; Kevin Zakka; Jan Peters, "PianoMime: Learning a Generalist, Dexterous Piano Player from Internet Demonstrations"

[244]Jia-Feng Cai; Zibo Chen; Xiao-Ming Wu; Jian-Jian Jiang; Yi-Lin Wei; Wei-Shi Zheng, "Real-to-Sim Grasp: Rethinking the Gap between Simulation and Real World in Grasp Detection"

[245]Junfeng Long; Wenye Yu; Quanyi Li; ZiRui Wang; Dahua Lin; Jiangmiao Pang, "Learning H-Infinity Locomotion Control"

[120]Jan Bruedigam; Ali Adeeb Abbas; Maks Sorokin; Kuan Fang; Brandon Hung; Maya Guru; Stefan Georg Sosnowski; Jiuguang Wang; Sandra Hirche; Simon Le Cleac'h, "Jacta: A Versatile Planner for Learning Dexterous and Whole-body Manipulation"

[246]Jianke Zhang; Yanjiang Guo; Xiaoyu Chen; Yen-Jen Wang; Yucheng Hu; Chengming Shi; Jianyu Chen, "HiRT: Enhancing Robotic Control with Hierarchical Robot Transformers"

[247]William Liang; Sam Wang; Hung-Ju Wang; Osbert Bastani; Dinesh Jayaraman; Yecheng Jason Ma, "Environment Curriculum Generation via Large Language Models"

[248]Liquan Wang; Ankit Goyal; Haoping Xu; Animesh Garg, "Discovering Robotic Interaction Modes with Discrete Representation Learning"

[249]Georgios Papagiannis; Edward Johns, "MILES: Making Imitation Learning Easy with Self-Supervision"

[250]Thies Oelerich; Christian Hartl-Nesic; Andreas Kugi, "Language-guided Manipulator Motion Planning with Bounded Task Space"

[45]Christopher Agia; Rohan Sinha; Jingyun Yang; Ziang Cao; Rika Antonova; Marco Pavone; Jeannette Bohg, "Unpacking Failure Modes of Generative Policies: Runtime Monitoring of Consistency and Progress"