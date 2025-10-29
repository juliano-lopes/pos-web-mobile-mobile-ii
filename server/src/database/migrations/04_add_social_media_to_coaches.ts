import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('coaches', (table) => {
        table.string('youtube_link', 255).nullable();
        table.string('linkedin_link', 255).nullable();
        table.string('tiktok_link', 255).nullable();
        table.string('instagram_link', 255).nullable();
    });
}

// O método 'down' é executado quando revertemos a migration (knex migrate:rollback)
export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('coaches', (table) => {
        table.dropColumn('youtube_link');
        table.dropColumn('linkedin_link');
        table.dropColumn('tiktok_link');
        table.dropColumn('instagram_link');
    });
}