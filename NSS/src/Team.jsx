import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = () => {
  const navigate = useNavigate();

  const programCoordinator = [
    {
      name: 'Dr. Debanga Raj Neog',
      position: 'NSS Program Coordinator',
      image: 'assets/overall.png'
    }
  ];

  const juniorAssistant = [
    {
      name: 'Mr. Deep Jyoti Baruah',
      position: 'Junior Assistant, NSS Cell',
      image: 'assets/staff/21.png',
      contact: {
        title: 'Contact person for office related works',
        number: '+91 3612582931'
      }
    }
  ];

  const jointCoordinator = [
    {
      name: 'Mr. Neelam Doin',
      position: 'Joint Student Coordinator',
      image: 'assets/staff/jsc.png'
    }
  ];

  const unitOfficers = [
    {
      unit: 'Unit 01 Nilachal',
      members: [
        { name: 'Dr. Kalyan Raidongia', position: 'PO', image: 'assets/staff/unit1/1.png' },
        { name: 'Mrs. Pallabita Barooah Choudhury', position: 'APO', image: 'assets/staff/unit1/2.png' }
      ]
    },
    {
      unit: 'Unit 02 Chitrachal',
      members: [
        { name: 'Dr. Rituparna Patgiri', position: 'PO', image: 'assets/staff/unit2/5.png' },
        { name: 'Mr. Kallal Baruah', position: 'APO', image: 'assets/staff/unit2/6.png' }
      ]
    },
    {
      unit: 'Unit 03 Sandhyachal',
      members: [
        { name: 'Dr. Nipjyoti Bharadwaj', position: 'PO', image: 'assets/staff/unit3/9.png' },
        { name: 'Mr. Manash Protim Dutta', position: 'APO', image: 'assets/staff/unit3/10.png' }
      ]
    },
    {
      unit: 'Unit 04 Bhasmachal',
      members: [
        { name: 'Dr. Manish Bhatt', position: 'PO', image: 'assets/staff/unit4/12.png' },
        { name: 'Mr. Kalyan Boro', position: 'APO', image: 'assets/staff/unit4/13.png' }
      ]
    },
    {
      unit: 'Unit 05 Bayukut',
      members: [
        { name: 'Dr. Neeraj K Sharma', position: 'PO', image: 'assets/staff/unit5/13.png' },
        { name: 'Mr. Pankaj kumar', position: 'APO', image: 'assets/staff/unit5/14.png' }
      ]
    },
    {
      unit: 'Unit 06 Chandrakut',
      members: [
        { name: 'Dr. Amarjyoti Mahanta', position: 'PO', image: 'assets/staff/unit6/14.png' },
        { name: 'Mr. Bibekananda Pathak', position: 'APO', image: 'assets/staff/unit6/15.png' }
      ]
    },
    {
      unit: 'Unit 07 Manikarneswar',
      members: [
        { name: 'Dr. Sumit Kumar', position: 'PO', image: 'assets/staff/unit7/15.png' },
        { name: 'Mr. Nabakumar Bhoi', position: 'APO', image: 'assets/staff/unit7/16.png' }
      ]
    },
    {
      unit: 'Unit 08 Garuachal',
      members: [
        { name: 'Dr. Kuldeep Baishya', position: 'PO', image: 'assets/staff/unit8/16.png' },
        { name: 'Mr. Himanku Dutta', position: 'APO', image: 'assets/staff/unit8/17.png' }
      ]
    },
    {
      unit: 'Unit 09 Drigheswari',
      members: [
        { name: 'Dr. R. B. Sharmila', position: 'PO', image: 'assets/staff/unit9/17.png' },
        { name: 'Ms. Nitimoyee Mahanta', position: 'APO', image: 'assets/staff/unit9/18.png' }
      ]
    },
    {
      unit: 'Unit 10 Agiyathuri',
      members: [
        { name: 'Dr. Romanbabu Oinam', position: 'PO', image: 'assets/staff/unit10/18.png' },
        { name: 'Ms. Nandeeta Das Salhotra', position: 'APO', image: 'assets/staff/unit10/19.png' }
      ]
    },
    {
      unit: 'Unit 11 Devottar',
      members: [
        { name: 'Dr. Kaling Taki', position: 'PO', image: 'assets/staff/unit11/19.png' },
        { name: 'Mr. Mintu Dutta', position: 'APO', image: 'assets/staff/unit11/20.png' }
      ]
    }
  ];

  const unitCoordinators = [
    { name: 'Mr. Lav Kumar', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/1.png' },
    { name: 'Mr. Harish Kumar', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/2.png' },
    { name: 'Mr. Jasvinder Singh', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/3.png' },
    { name: 'Ms. Shreha Kumari', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/4.png' },
    { name: 'Ms. Pratibha Chaudhary', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/5.png' },
    { name: 'Ms. Riya Ranjit Patil', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/6.png' },
    { name: 'Mr. Mohit Nagraj', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/7.png' }
  ];

  return (
    <div>
      <div style={{ padding: '20px', background: '#f9f9f9' }}>
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          ← Back to Home
        </button>
      </div>

      <section className="team-section">
        <div className="container">
          {/* Main Team Header */}
          <h1 className="main-title">Our Team</h1>
          <p className="main-subtitle">Meet the dedicated individuals behind NSS IIT Guwahati</p>
          
          {/* Program Coordinator - Single */}
          <div className="single-member-section">
            <h2 className="section-title">Program Coordinator</h2>
            <div className="single-member-grid">
              {programCoordinator.map((member, index) => (
                <div key={index} className="single-member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Junior Assistant - Single */}
          <div className="single-member-section">
            <h2 className="section-title">Junior Assistant</h2>
            <div className="single-member-grid">
              {juniorAssistant.map((member, index) => (
                <div key={index} className="single-member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                    {member.contact && (
                      <div className="contact-info">
                        <p className="contact-title">{member.contact.title}</p>
                        <p className="contact-number">{member.contact.number}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Joint Student Coordinator - Single */}
          <div className="single-member-section">
            <h2 className="section-title">Joint Student Coordinator</h2>
            <div className="single-member-grid">
              {jointCoordinator.map((member, index) => (
                <div key={index} className="single-member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Officers */}
          <div className="unit-officers-section">
            <h2 className="section-title">Unit Officers</h2>
            <div className="units-container">
              {unitOfficers.map((unit, index) => (
                <div key={index} className="unit-section">
                  <h3 className="unit-heading">{unit.unit}</h3>
                  <div className="unit-members-pair">
                    {unit.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="unit-member-card">
                        <div className="member-image-small">
                          <img src={member.image} alt={member.name} loading="lazy" />
                        </div>
                        <div className="member-details">
                          <h4>{member.name}</h4>
                          <p>{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Coordinators */}
          <div className="coordinators-section">
            <h2 className="section-title">Unit Coordinators</h2>
            <div className="coordinators-container">
              <div className="coordinators-row">
                {unitCoordinators.slice(0, 4).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="coordinators-row">
                {unitCoordinators.slice(4, 7).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;