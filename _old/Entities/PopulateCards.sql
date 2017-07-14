if exists ( select  *
            from    sys.objects
            where   object_id = OBJECT_ID(N'PopulateCards')
                    and type in ( N'P', N'PC' ) ) 
begin
drop procedure dbo.PopulateCards
end
go

create procedure PopulateCards 
as
declare @points table(idx int, id int);
insert into @points
values (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 10), (12, 10), (13, 10)
declare @suit INT;
declare @point INT;
set @suit = 1;
while @suit < 5
begin
	declare @value INT;
	select @value=1;
	while @value < 14
	begin
		set @point = (select id from @points where idx = @value);
		insert into dbo.Cards (id, suit, [value], points)
		values (NEWID(), @suit, @value, @point)
		set @value = @value + 1;
	end

	set @suit = @suit + 1
end
go

exec PopulateCards