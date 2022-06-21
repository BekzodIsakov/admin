import { hoc } from '@utils/hoc';
import { useState } from 'react';
import { CourseAdditionalGuid } from '../course-additional-guid/course-additional-guid.component';
import { CourseNotes } from '../course-notes/course-notes.component';
import { CourseQuestions } from '../course-questions/course-questions.component';
import { CourseTasks } from '../course-tasks/course-tasks.component';
import { CourseTopic } from '../course-topic/course-topic.component';
import {
  CourseTabContainer,
  CourseTabContent,
  CourseTabItem,
  CourseTabs
} from './course-tab.style';

const tabsTitle = [
  {
    name: 'Mavzu',
    value: 'topic'
  },
  {
    name: 'Vazifa',
    value: 'tasks'
  },
  {
    name: 'Qaydlarim',
    value: 'notes'
  },
  {
    name: 'Q&A',
    value: 'questions'
  },
  {
    name: 'Qo‘shimcha fayllar',
    value: 'additional_guide'
  }
];

export const useCourseTabProps = () => {
  const [activeTab, setActiveTab] = useState('topic');

  const tabs = {
    topic: <CourseTopic />,
    tasks: <CourseTasks />,
    notes: <CourseNotes />,
    questions: <CourseQuestions />,
    additional_guide: <CourseAdditionalGuid />
  };

  const handleChangeTab = tab => {
    setActiveTab(tab);
  };

  return { tabs, activeTab, handleChangeTab };
};

export const CourseTab = hoc(
  useCourseTabProps,
  ({ activeTab, tabs, handleChangeTab }) => {
    return (
      <CourseTabContainer>
        <CourseTabs>
          {tabsTitle.map(item => (
            <CourseTabItem
              key={item.value}
              onClick={handleChangeTab.bind(null, item.value)}
              active={activeTab === item.value}
            >
              {item.name}
            </CourseTabItem>
          ))}
        </CourseTabs>
        <CourseTabContent>{tabs[activeTab]}</CourseTabContent>
      </CourseTabContainer>
    );
  }
);
