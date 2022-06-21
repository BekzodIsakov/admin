import React from 'react';
import { RoundContainer, Subtitle, Title } from '../atoms.style';
import {
  CardContainer,
  CardContainerWithoutLink,
  CardWithoutLink
} from './card.styles';

export const Card = ({
  children,
  title,
  subtitle,
  link,
  active,
  norm,
  pending,
  button
}) => {
  return link ? (
    <CardContainer
      target='_blank'
      download={link}
      href={link}
      subtitle={subtitle}
    >
      <RoundContainer
        norm={norm}
        active={active}
        pending={pending}
        justify='center'
        align='center'
      >
        {children}
      </RoundContainer>
      <div>
        {title && <Title data-testid='course-task-linkTitle'>{title}</Title>}
        {subtitle && (
          <Subtitle data-testid='course-task-linkSubtitle'>{subtitle}</Subtitle>
        )}
      </div>
    </CardContainer>
  ) : (
    <CardWithoutLink>
      <CardContainerWithoutLink subtitle={subtitle}>
        <RoundContainer
          norm={norm}
          active={active}
          pending={pending}
          justify='center'
          align='center'
        >
          {children}
        </RoundContainer>
        <div>
          {title && <Title data-testid='course-task-item-title'>{title}</Title>}
          {subtitle && (
            <Subtitle data-testid='course-task-item-subtitle'>
              {subtitle}
            </Subtitle>
          )}
        </div>
      </CardContainerWithoutLink>
      {button}
    </CardWithoutLink>
  );
};
