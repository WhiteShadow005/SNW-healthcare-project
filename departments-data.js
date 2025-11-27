const departmentsData = {
    "cardiology": {
        "name": "Cardiology",
        "icon": "fa-heart-pulse",
        "description": "Comprehensive care for your heart and vascular system.",
        "heroImage": "media/cardiology-hero.jpg",
        "overview": "Our Cardiology department offers state-of-the-art diagnostic and therapeutic services for patients with heart and vascular disorders. Our team of renowned cardiologists uses the latest technology to provide personalized care.",
        "conditions": [
            "Coronary Artery Disease",
            "Heart Failure",
            "Arrhythmias",
            "Valvular Heart Disease",
            "Hypertension",
            "Congenital Heart Defects"
        ],
        "procedures": [
            "Echocardiography",
            "Cardiac Catheterization",
            "Angioplasty and Stenting",
            "Pacemaker Implantation",
            "Stress Testing",
            "Holter Monitoring"
        ],
        "faqs": [
            {
                "question": "What are the early signs of heart disease?",
                "answer": "Common signs include chest pain, shortness of breath, fatigue, and irregular heartbeats. However, some people may have no symptoms."
            },
            {
                "question": "How often should I have a heart check-up?",
                "answer": "It depends on your age and risk factors. Generally, adults should have their blood pressure checked at least once every two years and cholesterol every 4-6 years."
            }
        ]
    },
    "orthopedics": {
        "name": "Orthopedics",
        "icon": "fa-bone",
        "description": "Expert care for bones, joints, ligaments, and muscles.",
        "overview": "The Orthopedics department specializes in the diagnosis and treatment of disorders of the bones, joints, ligaments, tendons, and muscles. We help you regain mobility and live a pain-free life.",
        "conditions": [
            "Arthritis",
            "Fractures and Trauma",
            "Sports Injuries",
            "Back and Neck Pain",
            "Osteoporosis",
            "Carpal Tunnel Syndrome"
        ],
        "procedures": [
            "Joint Replacement Surgery (Knee, Hip)",
            "Arthroscopic Surgery",
            "Fracture Repair",
            "Spine Surgery",
            "Physical Therapy",
            "Pain Management Injections"
        ],
        "faqs": [
            {
                "question": "When should I see an orthopedic doctor?",
                "answer": "You should see a specialist if you have persistent pain, difficulty moving a joint, or an injury that doesn't improve with rest."
            },
            {
                "question": "Is surgery always necessary for joint pain?",
                "answer": "No, we prioritize non-surgical treatments like physical therapy, medication, and lifestyle changes whenever possible."
            }
        ]
    },
    "neurology": {
        "name": "Neurology",
        "icon": "fa-brain",
        "description": "Advanced treatment for disorders of the brain and nervous system.",
        "overview": "Our Neurology department provides comprehensive care for patients with disorders of the nervous system, including the brain, spinal cord, and nerves.",
        "conditions": [
            "Stroke",
            "Epilepsy",
            "Migraines and Headaches",
            "Alzheimer's and Dementia",
            "Parkinson's Disease",
            "Multiple Sclerosis"
        ],
        "procedures": [
            "EEG (Electroencephalogram)",
            "EMG (Electromyography)",
            "MRI and CT Scans",
            "Lumbar Puncture",
            "Botox Therapy for Migraines",
            "Stroke Rehabilitation"
        ],
        "faqs": [
            {
                "question": "What are the warning signs of a stroke?",
                "answer": "Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services."
            },
            {
                "question": "Can migraines be cured?",
                "answer": "While there is no cure, migraines can be effectively managed with medication and lifestyle changes."
            }
        ]
    },
    "pediatrics": {
        "name": "Pediatrics",
        "icon": "fa-child",
        "description": "Compassionate healthcare for infants, children, and adolescents.",
        "overview": "We provide specialized medical care for infants, children, and adolescents. Our pediatricians are dedicated to ensuring the health and well-being of your child.",
        "conditions": [
            "Common Infections (Flu, Cold)",
            "Asthma and Allergies",
            "Growth and Development Issues",
            "Childhood Diabetes",
            "ADHD and Behavioral Issues",
            "Vaccinations"
        ],
        "procedures": [
            "Well-Child Visits",
            "Immunizations",
            "Developmental Screenings",
            "School Physicals",
            "Treatment of Acute Illnesses",
            "Nutritional Counseling"
        ],
        "faqs": [
            {
                "question": "When should my child get their first check-up?",
                "answer": "The first check-up usually happens within a few days of leaving the hospital after birth."
            },
            {
                "question": "Are vaccines safe for my child?",
                "answer": "Yes, vaccines are rigorously tested and are the safest way to protect your child from serious diseases."
            }
        ]
    },
    "gynecology": {
        "name": "Gynecology",
        "icon": "fa-person-pregnant",
        "description": "Women's health services including maternity and reproductive care.",
        "overview": "Our Gynecology and Obstetrics department offers comprehensive healthcare for women at every stage of life, from adolescence through menopause.",
        "conditions": [
            "Pregnancy and Childbirth",
            "Menstrual Disorders",
            "PCOS",
            "Infertility",
            "Menopause Symptoms",
            "Pelvic Pain"
        ],
        "procedures": [
            "Prenatal Care and Delivery",
            "Pap Smears and Cancer Screening",
            "Ultrasound",
            "Hysterectomy",
            "Laparoscopic Surgery",
            "Family Planning Services"
        ],
        "faqs": [
            {
                "question": "How often should I have a Pap smear?",
                "answer": "Generally, women should start getting Pap smears at age 21 and continue every 3 years if results are normal."
            },
            {
                "question": "What services do you offer for expectant mothers?",
                "answer": "We offer complete prenatal care, high-risk pregnancy management, and delivery services."
            }
        ]
    },
    "dermatology": {
        "name": "Dermatology",
        "icon": "fa-hand-dots",
        "description": "Expert care for skin, hair, and nail conditions.",
        "overview": "Our Dermatologists diagnose and treat a wide range of conditions affecting the skin, hair, and nails, using both medical and cosmetic approaches.",
        "conditions": [
            "Acne",
            "Eczema and Psoriasis",
            "Skin Cancer",
            "Hair Loss",
            "Rosacea",
            "Skin Infections"
        ],
        "procedures": [
            "Skin Biopsy",
            "Mole Removal",
            "Acne Treatment",
            "Laser Therapy",
            "Chemical Peels",
            "Cryotherapy"
        ],
        "faqs": [
            {
                "question": "How can I prevent skin cancer?",
                "answer": "Use sunscreen daily, avoid excessive sun exposure, and check your skin regularly for changes."
            },
            {
                "question": "Do you offer cosmetic dermatology?",
                "answer": "Yes, we offer various cosmetic procedures including anti-aging treatments and scar revision."
            }
        ]
    },
    "general-medicine": {
        "name": "General Medicine",
        "icon": "fa-stethoscope",
        "description": "Primary care for overall health and chronic disease management.",
        "overview": "Our General Medicine department serves as the first point of contact for patients. We focus on preventive care, diagnosis, and management of chronic diseases.",
        "conditions": [
            "Diabetes",
            "Hypertension",
            "Thyroid Disorders",
            "Infectious Diseases",
            "Respiratory Infections",
            "Digestive Issues"
        ],
        "procedures": [
            "Routine Physical Exams",
            "Chronic Disease Management",
            "Preventive Screenings",
            "Vaccinations",
            "Pre-operative Clearance",
            "Health Education"
        ],
        "faqs": [
            {
                "question": "Do I need a referral to see a general physician?",
                "answer": "No, you can book an appointment directly for any general health concern."
            },
            {
                "question": "What should I bring to my appointment?",
                "answer": "Please bring your ID, insurance card, and a list of current medications."
            }
        ]
    },
    "emergency-care": {
        "name": "Emergency Care",
        "icon": "fa-truck-medical",
        "description": "24/7 rapid response for critical medical situations.",
        "overview": "Our Emergency Department is open 24/7 to provide immediate care for life-threatening and urgent medical conditions. We are equipped with advanced technology and a dedicated trauma team.",
        "conditions": [
            "Chest Pain and Heart Attacks",
            "Stroke Symptoms",
            "Severe Trauma and Accidents",
            "Difficulty Breathing",
            "Severe Allergic Reactions",
            "Uncontrolled Bleeding"
        ],
        "procedures": [
            "Trauma Resuscitation",
            "Emergency Surgery",
            "Advanced Cardiac Life Support",
            "Wound Care and Suturing",
            "Diagnostic Imaging (CT, X-ray)",
            "Critical Care Management"
        ],
        "faqs": [
            {
                "question": "When should I go to the ER vs. Urgent Care?",
                "answer": "Go to the ER for life-threatening conditions. For minor injuries or illnesses, Urgent Care is appropriate."
            },
            {
                "question": "What are the wait times?",
                "answer": "Wait times vary based on the severity of patients' conditions. Critical cases are always prioritized."
            }
        ]
    }
};
