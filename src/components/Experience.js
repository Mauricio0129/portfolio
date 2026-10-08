import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import experience from '../static/experience.json';

const Experience = () => {
    return (
        <div id="experience" className="experience-container">
            <div className="title-header">
                <h3>━━ Experience</h3>
            </div>
            <div className='experience-timeline'>
                <Timeline>
                    {experience && experience.map(({ company, start, title, description }) =>
                        <TimelineItem key={company}>
                            <TimelineOppositeContent sx={{ paddingLeft: 0, maxWidth: '180px', whiteSpace: 'nowrap' }}>
                                <h4>{start}</h4>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: '#B46F33' }} />
                                <TimelineConnector sx={{ minHeight: '120px', backgroundColor: '#31363E' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h4>{company}</h4>
                                <p><b>{title}</b></p>
                                <p>{description}</p>
                            </TimelineContent>
                        </TimelineItem>
                    )}
                </Timeline>
            </div>
        </div>
    );
}

export default Experience;
