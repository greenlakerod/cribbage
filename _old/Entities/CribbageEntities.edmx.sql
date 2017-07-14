
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/26/2016 22:00:41
-- Generated from EDMX file: C:\Users\roderick.eligio\Source\Repos\cribbage\Windows\Entities\CribbageEntities.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Cribbage];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_UserRole_Role]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserRoles] DROP CONSTRAINT [FK_UserRole_Role];
GO
IF OBJECT_ID(N'[dbo].[FK_UserRole_User]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserRoles] DROP CONSTRAINT [FK_UserRole_User];
GO
IF OBJECT_ID(N'[dbo].[FK_Game_Match]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Games] DROP CONSTRAINT [FK_Game_Match];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_Game]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Players] DROP CONSTRAINT [FK_Player_Game];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_User]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Players] DROP CONSTRAINT [FK_Player_User];
GO
IF OBJECT_ID(N'[dbo].[FK_GameHand_Game]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[GameHands] DROP CONSTRAINT [FK_GameHand_Game];
GO
IF OBJECT_ID(N'[dbo].[FK_PlayerHand_GameHand]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlayerHands] DROP CONSTRAINT [FK_PlayerHand_GameHand];
GO
IF OBJECT_ID(N'[dbo].[FK_GameHand_PlayerHand_Crib]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[GameHands] DROP CONSTRAINT [FK_GameHand_PlayerHand_Crib];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_GameHand_LastPlayer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[GameHands] DROP CONSTRAINT [FK_Player_GameHand_LastPlayer];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_GameHand_CurrentPlayer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[GameHands] DROP CONSTRAINT [FK_Player_GameHand_CurrentPlayer];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_PlayerHand]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlayerHands] DROP CONSTRAINT [FK_Player_PlayerHand];
GO
IF OBJECT_ID(N'[dbo].[FK_PlayerHand_Player_Crib]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Players] DROP CONSTRAINT [FK_PlayerHand_Player_Crib];
GO
IF OBJECT_ID(N'[dbo].[FK_PlayerHand_Player]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Players] DROP CONSTRAINT [FK_PlayerHand_Player];
GO
IF OBJECT_ID(N'[dbo].[FK_GameHand_Game_CurrentHand]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Games] DROP CONSTRAINT [FK_GameHand_Game_CurrentHand];
GO
IF OBJECT_ID(N'[dbo].[FK_Player_Game_CurrentDealer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Games] DROP CONSTRAINT [FK_Player_Game_CurrentDealer];
GO
IF OBJECT_ID(N'[dbo].[FK_Game_Match_CurrentGame]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Matches] DROP CONSTRAINT [FK_Game_Match_CurrentGame];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Roles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Roles];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[UserRoles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserRoles];
GO
IF OBJECT_ID(N'[dbo].[PlayerHands]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PlayerHands];
GO
IF OBJECT_ID(N'[dbo].[Games]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Games];
GO
IF OBJECT_ID(N'[dbo].[Matches]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Matches];
GO
IF OBJECT_ID(N'[dbo].[Players]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Players];
GO
IF OBJECT_ID(N'[dbo].[GameHands]', 'U') IS NOT NULL
    DROP TABLE [dbo].[GameHands];
GO
IF OBJECT_ID(N'[dbo].[Cards]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Cards];
GO
IF OBJECT_ID(N'[dbo].[Errors]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Errors];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Roles'
CREATE TABLE [dbo].[Roles] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(50)  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] uniqueidentifier  NOT NULL,
    [Username] varchar(50)  NOT NULL,
    [HashedPassword] nvarchar(max)  NOT NULL,
    [Email] varchar(50)  NOT NULL,
    [Salt] nvarchar(max)  NOT NULL,
    [IsLocked] bit  NOT NULL,
    [DateCreated] datetime  NOT NULL
);
GO

-- Creating table 'UserRoles'
CREATE TABLE [dbo].[UserRoles] (
    [Id] uniqueidentifier  NOT NULL,
    [UserId] uniqueidentifier  NOT NULL,
    [RoleId] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PlayerHands'
CREATE TABLE [dbo].[PlayerHands] (
    [Id] uniqueidentifier  NOT NULL,
    [GameHandId] uniqueidentifier  NOT NULL,
    [PlayerId] uniqueidentifier  NOT NULL,
    [IsCrib] bit  NOT NULL,
    [CardIds] nvarchar(max)  NOT NULL,
    [PlayedCardIds] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Games'
CREATE TABLE [dbo].[Games] (
    [Id] uniqueidentifier  NOT NULL,
    [MatchId] uniqueidentifier  NOT NULL,
    [State] int  NOT NULL,
    [AllowMuggins] bit  NOT NULL,
    [CurrentHandId] uniqueidentifier  NOT NULL,
    [CurrentDealerId] uniqueidentifier  NOT NULL,
    [Index] int  NOT NULL
);
GO

-- Creating table 'Matches'
CREATE TABLE [dbo].[Matches] (
    [Id] uniqueidentifier  NOT NULL,
    [State] int  NOT NULL,
    [CurrentGameId] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'Players'
CREATE TABLE [dbo].[Players] (
    [Id] uniqueidentifier  NOT NULL,
    [GameId] uniqueidentifier  NOT NULL,
    [UserId] uniqueidentifier  NOT NULL,
    [GameOrder] int  NOT NULL,
    [GameTotal] int  NOT NULL,
    [CribId] uniqueidentifier  NOT NULL,
    [CurrentHandId] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'GameHands'
CREATE TABLE [dbo].[GameHands] (
    [Id] uniqueidentifier  NOT NULL,
    [GameId] uniqueidentifier  NOT NULL,
    [State] int  NOT NULL,
    [CribId] uniqueidentifier  NULL,
    [LastPlayerId] uniqueidentifier  NOT NULL,
    [CurrentPlayerId] uniqueidentifier  NOT NULL,
    [Index] int  NOT NULL,
    [CutCardId] int  NOT NULL,
    [CardIds] nvarchar(max)  NOT NULL,
    [PlayedCardIds] nvarchar(max)  NOT NULL,
    [GoCount] int  NOT NULL,
    [MatchingCardValueCount] int  NOT NULL
);
GO

-- Creating table 'Cards'
CREATE TABLE [dbo].[Cards] (
    [Id] uniqueidentifier  NOT NULL,
    [Suit] int  NOT NULL,
    [Value] int  NOT NULL,
    [Points] int  NOT NULL
);
GO

-- Creating table 'Errors'
CREATE TABLE [dbo].[Errors] (
    [Id] uniqueidentifier  NOT NULL,
    [Message] nvarchar(max)  NOT NULL,
    [AdditionalInfo] nvarchar(max)  NOT NULL,
    [DateCreated] datetime  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Roles'
ALTER TABLE [dbo].[Roles]
ADD CONSTRAINT [PK_Roles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'UserRoles'
ALTER TABLE [dbo].[UserRoles]
ADD CONSTRAINT [PK_UserRoles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PlayerHands'
ALTER TABLE [dbo].[PlayerHands]
ADD CONSTRAINT [PK_PlayerHands]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Games'
ALTER TABLE [dbo].[Games]
ADD CONSTRAINT [PK_Games]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Matches'
ALTER TABLE [dbo].[Matches]
ADD CONSTRAINT [PK_Matches]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Players'
ALTER TABLE [dbo].[Players]
ADD CONSTRAINT [PK_Players]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'GameHands'
ALTER TABLE [dbo].[GameHands]
ADD CONSTRAINT [PK_GameHands]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Cards'
ALTER TABLE [dbo].[Cards]
ADD CONSTRAINT [PK_Cards]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Errors'
ALTER TABLE [dbo].[Errors]
ADD CONSTRAINT [PK_Errors]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [RoleId] in table 'UserRoles'
ALTER TABLE [dbo].[UserRoles]
ADD CONSTRAINT [FK_UserRole_Role]
    FOREIGN KEY ([RoleId])
    REFERENCES [dbo].[Roles]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserRole_Role'
CREATE INDEX [IX_FK_UserRole_Role]
ON [dbo].[UserRoles]
    ([RoleId]);
GO

-- Creating foreign key on [UserId] in table 'UserRoles'
ALTER TABLE [dbo].[UserRoles]
ADD CONSTRAINT [FK_UserRole_User]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserRole_User'
CREATE INDEX [IX_FK_UserRole_User]
ON [dbo].[UserRoles]
    ([UserId]);
GO

-- Creating foreign key on [MatchId] in table 'Games'
ALTER TABLE [dbo].[Games]
ADD CONSTRAINT [FK_Game_Match]
    FOREIGN KEY ([MatchId])
    REFERENCES [dbo].[Matches]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Game_Match'
CREATE INDEX [IX_FK_Game_Match]
ON [dbo].[Games]
    ([MatchId]);
GO

-- Creating foreign key on [GameId] in table 'Players'
ALTER TABLE [dbo].[Players]
ADD CONSTRAINT [FK_Player_Game]
    FOREIGN KEY ([GameId])
    REFERENCES [dbo].[Games]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_Game'
CREATE INDEX [IX_FK_Player_Game]
ON [dbo].[Players]
    ([GameId]);
GO

-- Creating foreign key on [UserId] in table 'Players'
ALTER TABLE [dbo].[Players]
ADD CONSTRAINT [FK_Player_User]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_User'
CREATE INDEX [IX_FK_Player_User]
ON [dbo].[Players]
    ([UserId]);
GO

-- Creating foreign key on [GameId] in table 'GameHands'
ALTER TABLE [dbo].[GameHands]
ADD CONSTRAINT [FK_GameHand_Game]
    FOREIGN KEY ([GameId])
    REFERENCES [dbo].[Games]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_GameHand_Game'
CREATE INDEX [IX_FK_GameHand_Game]
ON [dbo].[GameHands]
    ([GameId]);
GO

-- Creating foreign key on [GameHandId] in table 'PlayerHands'
ALTER TABLE [dbo].[PlayerHands]
ADD CONSTRAINT [FK_PlayerHand_GameHand]
    FOREIGN KEY ([GameHandId])
    REFERENCES [dbo].[GameHands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlayerHand_GameHand'
CREATE INDEX [IX_FK_PlayerHand_GameHand]
ON [dbo].[PlayerHands]
    ([GameHandId]);
GO

-- Creating foreign key on [CribId] in table 'GameHands'
ALTER TABLE [dbo].[GameHands]
ADD CONSTRAINT [FK_GameHand_PlayerHand_Crib]
    FOREIGN KEY ([CribId])
    REFERENCES [dbo].[PlayerHands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_GameHand_PlayerHand_Crib'
CREATE INDEX [IX_FK_GameHand_PlayerHand_Crib]
ON [dbo].[GameHands]
    ([CribId]);
GO

-- Creating foreign key on [LastPlayerId] in table 'GameHands'
ALTER TABLE [dbo].[GameHands]
ADD CONSTRAINT [FK_Player_GameHand_LastPlayer]
    FOREIGN KEY ([LastPlayerId])
    REFERENCES [dbo].[Players]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_GameHand_LastPlayer'
CREATE INDEX [IX_FK_Player_GameHand_LastPlayer]
ON [dbo].[GameHands]
    ([LastPlayerId]);
GO

-- Creating foreign key on [CurrentPlayerId] in table 'GameHands'
ALTER TABLE [dbo].[GameHands]
ADD CONSTRAINT [FK_Player_GameHand_CurrentPlayer]
    FOREIGN KEY ([CurrentPlayerId])
    REFERENCES [dbo].[Players]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_GameHand_CurrentPlayer'
CREATE INDEX [IX_FK_Player_GameHand_CurrentPlayer]
ON [dbo].[GameHands]
    ([CurrentPlayerId]);
GO

-- Creating foreign key on [PlayerId] in table 'PlayerHands'
ALTER TABLE [dbo].[PlayerHands]
ADD CONSTRAINT [FK_Player_PlayerHand]
    FOREIGN KEY ([PlayerId])
    REFERENCES [dbo].[Players]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_PlayerHand'
CREATE INDEX [IX_FK_Player_PlayerHand]
ON [dbo].[PlayerHands]
    ([PlayerId]);
GO

-- Creating foreign key on [CribId] in table 'Players'
ALTER TABLE [dbo].[Players]
ADD CONSTRAINT [FK_PlayerHand_Player_Crib]
    FOREIGN KEY ([CribId])
    REFERENCES [dbo].[PlayerHands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlayerHand_Player_Crib'
CREATE INDEX [IX_FK_PlayerHand_Player_Crib]
ON [dbo].[Players]
    ([CribId]);
GO

-- Creating foreign key on [CurrentHandId] in table 'Players'
ALTER TABLE [dbo].[Players]
ADD CONSTRAINT [FK_PlayerHand_Player]
    FOREIGN KEY ([CurrentHandId])
    REFERENCES [dbo].[PlayerHands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlayerHand_Player'
CREATE INDEX [IX_FK_PlayerHand_Player]
ON [dbo].[Players]
    ([CurrentHandId]);
GO

-- Creating foreign key on [CurrentHandId] in table 'Games'
ALTER TABLE [dbo].[Games]
ADD CONSTRAINT [FK_GameHand_Game_CurrentHand]
    FOREIGN KEY ([CurrentHandId])
    REFERENCES [dbo].[GameHands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_GameHand_Game_CurrentHand'
CREATE INDEX [IX_FK_GameHand_Game_CurrentHand]
ON [dbo].[Games]
    ([CurrentHandId]);
GO

-- Creating foreign key on [CurrentDealerId] in table 'Games'
ALTER TABLE [dbo].[Games]
ADD CONSTRAINT [FK_Player_Game_CurrentDealer]
    FOREIGN KEY ([CurrentDealerId])
    REFERENCES [dbo].[Players]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Player_Game_CurrentDealer'
CREATE INDEX [IX_FK_Player_Game_CurrentDealer]
ON [dbo].[Games]
    ([CurrentDealerId]);
GO

-- Creating foreign key on [CurrentGameId] in table 'Matches'
ALTER TABLE [dbo].[Matches]
ADD CONSTRAINT [FK_Game_Match_CurrentGame]
    FOREIGN KEY ([CurrentGameId])
    REFERENCES [dbo].[Games]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Game_Match_CurrentGame'
CREATE INDEX [IX_FK_Game_Match_CurrentGame]
ON [dbo].[Matches]
    ([CurrentGameId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------